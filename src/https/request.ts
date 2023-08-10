import axios from 'axios'
import { ElMessage } from 'element-plus'

import { requestParamsType, responseDataType } from './type'

// const env: string = import.meta.env.VITE_USER_NODE_ENV
const baseUrl: string = import.meta.env.VITE_APP_BASE_API

// json: 请求体为 json
// form-data 请求体为formData，用于上传文件
// blob 用于post请求下载文件，get请求则用 getUrl 获取 url 后 window.open
const requestTypeMap = {
  json: 'json',
  formData: 'form-data',
  arraybuffer: 'arraybuffer',
  blob: 'blob'
}

export default class HttpRequest {
  xhr_desc: string
  xhr_api_code: string
  xhr_params: object
  xhr_type: string
  xhr_header: object
  xhr_url: string
  xhr_method: string
  xhr_service: any
  cancelToken: any

  constructor(data: requestParamsType) {
    this.xhr_desc = data.desc // API 描述
    this.xhr_api_code = data.apiCode // API 文档编码

    this.xhr_params = data.params ? data.params : {} // API 入参
    this.xhr_type = data.type ? data.type : '' // API 请求方式 json 、from-data 、blob

    this.xhr_header = this.getHeaderInType(data.headers) // 请求头

    this.xhr_method = data.method ? data.method.toLocaleLowerCase() : 'get' // 请求方式
    this.xhr_url = data.url // 请求路径

    this.xhr_service = axios.create({
      timeout: 60000 // request timeout
    }) // axios.create

    this.cancelToken = null // 存放取消请求方法

    this.setRequestInterceptors() // 请求拦截
    this.setResponseInterceptors() // 返回拦截
  }
  // 发起请求
  connect(data: object) {
    if (!this.xhr_desc) {
      console.error('请填写 API 描述（desc）')
      return
    }

    if (!this.xhr_api_code) {
      console.error(
        '请填写 接口文档 编码（https://apidoc.datastory.com.cn/doc/79vEfaoSkP => apiCode: 79vEfaoSkP）'
      )
      return
    }

    const paramsKey = ['get', 'delete'].includes(this.xhr_method)
      ? 'params'
      : 'data'

    const requestData = this.getParams(data)
    const url = this.getUrl()

    return this.xhr_service({
      method: this.xhr_method,
      url,
      headers: this.xhr_header,
      [paramsKey]: requestData,
      cancelToken: new axios.CancelToken((callback) => {
        this.cancelToken = callback
      })
    })
      .then((res: any) => {
        return Promise.resolve(res)
      })
      .catch((err: any) => {
        return Promise.reject(err)
      })
  }

  // 取消请求
  cancel(msg: string = '取消请求') {
    console.log('this.cancelToken--------------', this.cancelToken)
    this.cancelToken && this.cancelToken(msg)
  }

  // 请求拦截
  setRequestInterceptors() {
    this.xhr_service.interceptors.request.use(
      (config: any) => {
        config.headers['Authorization'] = localStorage.getItem('token')
        return config
      },
      (error: any) => {
        throw error
      }
    )
  }
  // 返回拦截
  setResponseInterceptors() {
    this.xhr_service.interceptors.response.use(
      (response: responseDataType) => {
        this.cancelToken = null
        const code = response.data.code
        switch (code) {
          case '10005':
            console.error('请求服务异常')
            break
          case '403':
            console.error('用户登录token失效')
            ElMessage.warning('未登录或登录过期')
            localStorage.removeItem('token')
            // router.push('/login')
            break
        }
        return response.data
      },
      (error: any) => {
        let message = error.message
        if (error.message.includes('timeout')) message = '网络请求超时！'
        if (error.message.includes('Network'))
          message = window.navigator.onLine ? '服务端异常！' : '您断网了！'

        ElMessage({
          message: message,
          type: 'error',
          duration: 5 * 1000
        })
        throw error
      }
    )
  }

  // 获取完整的请求 URL
  getUrl() {
    const path = this.xhr_url
    return `${baseUrl}${path.charAt(0) === '/' ? '' : '/'}${path}`
  }
  // 获取 headers type
  getHeaderInType(headers: object = {}) {
    let xhr_header = {}

    switch (this.xhr_type) {
      case requestTypeMap.json:
        xhr_header = {
          'Content-Type': 'application/json'
        }
        break
      case requestTypeMap.formData:
        xhr_header = {
          'Content-Type': 'multipart/form-data'
        }
        break
      case requestTypeMap.blob:
        xhr_header = {
          responseType: 'blob'
        }
        break
      case requestTypeMap.arraybuffer:
        xhr_header = {
          responseType: 'arraybuffer'
        }
        break
    }

    return Object.assign(xhr_header, headers)
  }

  // 获取 入参
  getParams(data: object) {
    switch (this.xhr_type) {
      case requestTypeMap.formData:
        let formData = new FormData()

        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value)
        })

        return formData
      default:
        return data
    }
  }
}

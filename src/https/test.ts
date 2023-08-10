import HttpRequest from './request'

export const requestLogin = new HttpRequest({
  desc: '请求列表',
  apiCode: '79v7XKuhwb',
  method: 'post',
  type: 'json',
  headers: {
    Authorization: 'user token'
  },
  params: {},
  url: '/api_v1/login'
})

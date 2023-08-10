export interface requestParamsType {
  desc: string
  apiCode: string
  method: string
  type: string
  params: object
  headers: object
  url: string
}

export interface responseDataType {
  code: string
  data: any
  message: string
}

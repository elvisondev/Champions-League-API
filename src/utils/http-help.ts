import { ResponseHTTP } from '../models/http-response.model'

export const OK = async (data: any): Promise<ResponseHTTP> => {
  return {
    statusHTTP: 200,
    body: data
  }
}

export const NO_CONTENT = async (): Promise<ResponseHTTP> => {
  return {
    statusHTTP: 204,
    body: null
  }
}

export const BAD_REQUEST = async (): Promise<ResponseHTTP> => {
  return {
    statusHTTP: 400,
    body: null
  }
}
export const CREATED = async (): Promise<ResponseHTTP> => {
  return {
    statusHTTP: 201,
    body: {
      message: 'Successful'
    }
  }
}

// export enum StatusCode {
//   OK = 200,
//   CREATED = 201,
//   NO_CONTENT = 204,

//   BAD_REQUEST = 400,
//   UNAUTHORIZED = 401,
//   FORBIDDEN = 403,
//   NOT_FOUND = 404,

//   INTERNAL_SERVER_ERROR = 500
// }

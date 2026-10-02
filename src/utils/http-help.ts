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
      message: 'Created Successfully'
    }
  }
}
export const CONFLICT = async (): Promise<ResponseHTTP> => {
  return {
    statusHTTP: 409,
    body: {
      message: "This ID already exists."
    }
  }
}

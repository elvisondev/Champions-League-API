import { HttpResponse } from "../models/http-response.model";

export const OK = async (data:any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data
  };
};

export const NO_CONTENT = async (data:any): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: data
  };
};

export const NOT_FOUND = async (data:any): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: data
  };
};


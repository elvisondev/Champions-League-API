import { ParamsDictionary } from 'express-serve-static-core'
export interface myParams extends ParamsDictionary {
  id: string
}
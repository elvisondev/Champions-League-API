import { Request, Response } from 'express'
import * as clubServices from '../services/club-services'
import { myParams } from '../models/parameters-model'

export const getClubs = async (req: Request, res: Response) => {
  const response = await clubServices.getClubsServices()

  res.status(response.statusHTTP).json(response.body)
}

export const getClubByID = async (req: Request<myParams>, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await clubServices.getClubsByIdServices(id)

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}



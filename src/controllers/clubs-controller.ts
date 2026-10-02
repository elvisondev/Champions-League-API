import { Request, response, Response } from 'express'
import * as clubServices from '../services/club-services'
import { myParams } from '../models/parameters-model'
import { createClubServices } from '../services/club-services'

export const getClubs = async (req: Request, res: Response) => {
  const response = await clubServices.getClubsServices()

  res.status(response.statusHTTP).json(response.body)
}

export const getClubsByID = async (req: Request<myParams>, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await clubServices.getClubsByIdServices(id)

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}

export const postClubs = async (req: Request, res: Response) => {
  const bodyValue = req.body

  const httpResponse = await clubServices.createClubServices(bodyValue)

  if (httpResponse) {
    res.status(httpResponse.statusHTTP).json(httpResponse.body)
  }
}

export const deleteClubs = async (req: Request<myParams>, res: Response) => {
  const id = parseInt(req.params.id)

  const httpResponse = await clubServices.deleteClubServices(id)

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}

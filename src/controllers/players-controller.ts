import { Request, Response } from 'express'
import * as services from '../services/players-services'
import { myParams } from '../models/parameters-model'
import { StatisticsModel } from '../models/statistics-model'

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await services.getPlayerServices()

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}

export const getPlayerByID = async (req: Request<myParams>, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await services.getPlayerByIdServices(id)

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body

  const httpResponse = await services.createPlayerScervices(bodyValue)

  if (httpResponse) {
    res.status(httpResponse.statusHTTP).json(httpResponse.body)
  }
}

export const deletePlayer = async (req: Request<myParams>, res: Response) => {
  const id = parseInt(req.params.id)

  const httpResponse = await services.deletePlayerServices(id)

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}

export const updatePlayer = async (req: Request<myParams>, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue: StatisticsModel = req.body
  const httpResponse = await services.updatePlayerServices(id, bodyValue)

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}

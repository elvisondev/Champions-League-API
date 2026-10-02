import { Request, Response } from 'express'
import * as services from '../services/players-services'
import { myParams } from '../models/parameters-model'
import { StatisticsModel } from '../models/statistics-model'

// * Mas eu poderia usar inline dessa forma (req:Request<{ id: string } & Record<string, string>>, res:Response)
// * Type mismatch em req.params.id: o parâmetro pode ser string | string[], mas parseInt() aceita apenas string.
// * Após garantir que id é uma string, parseInt() converte o valor para number, conforme esperado pelo service.

export const getPlayer = async (req: Request, res: Response) => {
  // * AQUI EU FAÇO MEU ENCADEAMENTO COM O STATUS().JSON({})
  const httpResponse = await services.getPlayerServices()

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}

export const getPlayerByID = async (req: Request<myParams>, res: Response) => {
  // * Recuperando dados pela url pelo meu req:Request params
  const id = parseInt(req.params.id)
  const httpResponse = await services.getPlayerByIdServices(id)

  res.status(httpResponse.statusHTTP).json(httpResponse.body)
}

// * Minha rota aponta para cá
export const postPlayer = async (req: Request, res: Response) => {
  // * Meu controller recuperar os dado que estão vindo no  body da requisição
  const bodyValue = req.body
  // * Aqui eu envio pro meu services createPlayerScervices o meus dados reuperados
  const httpResponse = await services.createPlayerScervices(bodyValue)

  // * Dependo do que acontecer com meu services
  // * Se esse cara httpResponse não for vazio - eu tenho retorno que deu tudo certo
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

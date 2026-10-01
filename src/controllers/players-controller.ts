import { Request, Response } from 'express'
import { getPlayerServices } from '../services/players-services'

export const getPlayer = async (req: Request, res: Response) => {
  // * AQUI EU FAÇO MEU ENCADEAMENTO COM O STATUS().JSON({})
  const httpResponse = await getPlayerServices()

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

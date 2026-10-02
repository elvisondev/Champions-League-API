import { StatisticsModel } from './../models/statistics-model'
import { PlayerModel } from '../models/player-model'
import * as playersRepositories from '../repositories/players-repository'
import * as httpResponse from '../utils/http-help'

export const getPlayerServices = async () => {
  //Pedir pro repositorio de dados;
  const dataPlayer = await playersRepositories.findAllPlayers()
  let response = null

  if (dataPlayer) {
    response = await httpResponse.OK(dataPlayer)
  } else {
    response = await httpResponse.NO_CONTENT()
  }

  return response
}

export const getPlayerByIdServices = async (id: number) => {
  //Pedir pro repositorio de dados;
  const findID = await playersRepositories.findPlayerByID(id)
  let response = null

  if (findID) {
    response = await httpResponse.OK(findID)
  } else {
    response = await httpResponse.NO_CONTENT()
  }
  return response
}

export const createPlayerScervices = async (player: PlayerModel) => {
  // Verificar se está vazio o objeto
  let response = null
  if (player) {
    await playersRepositories.insertPlayer(player)
    response = httpResponse.CREATED()
  } else {
    console.log('BAD_REQUEST')
    response = httpResponse.BAD_REQUEST()
  }

  return response
}

export const deletePlayerServices = async (id: number) => {
  //const isDeleted = await playersRepositories.findPlayerByID(id)
  const isDeleted = await playersRepositories.deleteOnePlayer(id)
  let response = null
  if (isDeleted) {
    response = await httpResponse.OK({ message: 'PLAYER DELETED' })
  } else {
    response = await httpResponse.BAD_REQUEST()
  }

  return response
}

export const updatePlayerServices = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await playersRepositories.findModifyPlayer(id, statistics)
  let response = null

  if (Object.keys(data).length === 0) {
    response = await httpResponse.BAD_REQUEST()
  } else {
    response = httpResponse.OK(data)
  }

  return response
}

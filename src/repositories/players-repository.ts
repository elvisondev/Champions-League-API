import fs from 'fs/promises'
import { StatisticsModel } from './../models/statistics-model'
import { PlayerModel } from '../models/player-model'
import { PATHPLAYERSJSON } from '../utils/path-json'
import { json } from 'express'

const LANGUAGE = 'utf-8'

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  const dataJson = await fs.readFile(PATHPLAYERSJSON, LANGUAGE)

  const players: PlayerModel[] = JSON.parse(dataJson)

  return players
}
export const findPlayerByID = async (
  id: number
): Promise<PlayerModel | undefined> => {
  const dataID = await fs.readFile(PATHPLAYERSJSON, LANGUAGE)
  let playerID = JSON.parse(dataID)

  playerID = playerID.find((player: PlayerModel) => player.id == id)

  return playerID
}
export const insertPlayer = async (player: PlayerModel) => {
  const dataFile = await fs.readFile(PATHPLAYERSJSON, LANGUAGE)
  let dataPush = JSON.parse(dataFile)

  dataPush.push(player)

  await fs.writeFile(
    PATHPLAYERSJSON,
    JSON.stringify(dataPush, null, 2),
    LANGUAGE
  )

  return dataPush
}

export const deleteOnePlayer = async (id: number) => {
  const index = await fs.readFile(PATHPLAYERSJSON, LANGUAGE)
  let dataIndex = JSON.parse(index)

  let fileIndex = dataIndex.findIndex((player: PlayerModel) => player.id === id)

  if (fileIndex !== -1) {
    dataIndex.splice(index, 1)

    await fs.writeFile(
      PATHPLAYERSJSON,
      JSON.stringify(dataIndex, null, 2),
      LANGUAGE
    )

    return true
  }
  return false
}
export const findModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
) => {
  const index = await fs.readFile(PATHPLAYERSJSON, LANGUAGE)
  let dataBase = JSON.parse(index)

  const playerIndex = dataBase.findIndex(
    (player: PlayerModel) => player.id === id
  )

  if (playerIndex !== -1) {
    dataBase[playerIndex].statistics = statistics
     await fs.writeFile(
      PATHPLAYERSJSON,
      JSON.stringify(dataBase, null, 2),
      LANGUAGE
    )

  }

  return dataBase[playerIndex]
}

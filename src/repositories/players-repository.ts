import { PlayerModel } from '../models/player-model'

const dataBase: PlayerModel[] = [
  { id: 1, name: 'Messi' },
  { id: 2, name: 'Rolnado' }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase
}

export const findByID = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find(player => player.id == id)
}
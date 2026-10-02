import { StatisticsModel } from './../models/statistics-model'
import { PlayerModel } from '../models/player-model'

const dataBase: PlayerModel[] = [
  {
    id: 1,
    name: 'Lionel Messi',
    club: 'Inter Miami',
    nationality: 'Argentina',
    position: 'Midfielder',
    statistics: {
      Overall: 89,
      Pace: 76,
      Shooting: 87,
      Passing: 89,
      Dribbling: 90,
      Defending: 33,
      Physical: 63
    }
  },
  {
    id: 2,
    name: 'Neymar Jr',
    club: 'Santos FC',
    nationality: 'Brazil',
    position: 'Forward',
    statistics: {
      Overall: 83,
      Pace: 77,
      Shooting: 80,
      Passing: 85,
      Dribbling: 84,
      Defending: 39,
      Physical: 58
    }
  },
  {
    id: 3,
    name: 'Cristiano Ronaldo',
    club: 'Al Nassr',
    nationality: 'Portugal',
    position: 'Forward',
    statistics: {
      Overall: 84,
      Pace: 67,
      Shooting: 88,
      Passing: 75,
      Dribbling: 78,
      Defending: 33,
      Physical: 75
    }
  },
  {
    id: 4,
    name: 'Kevin De Bruyne',
    club: 'SSC Napoli',
    nationality: 'Belgium',
    position: 'Midfielder',
    statistics: {
      Overall: 85,
      Pace: 59,
      Shooting: 82,
      Passing: 89,
      Dribbling: 84,
      Defending: 66,
      Physical: 67
    }
  }
]
export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase
}
export const findPlayerByID = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find(player => player.id == id)
}
export const insertPlayer = async (player: PlayerModel) => {
  dataBase.push(player)
}

export const deleteOnePlayer = async (id: number) => {
  const index = dataBase.findIndex(p => p.id === id)

  if (index !== -1) {
    dataBase.splice(index, 1)

    return true
  }
  return false
}
export const findModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
) => {
  const playerIndex = dataBase.findIndex(player => player.id === id)

  if (playerIndex !== -1) {
    dataBase[playerIndex].statistics = statistics
  }

  return dataBase[playerIndex]
}

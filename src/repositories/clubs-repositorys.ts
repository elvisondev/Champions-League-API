import { ClubsModel } from '../models/clubs-model'
import fs from 'fs/promises'
import { PATHJSON } from '../utils/path-json'

const LANGUAGE = 'utf-8'

export const findAllClubs = async (): Promise<ClubsModel[]> => {
  const dataJson = await fs.readFile(PATHJSON, LANGUAGE)
  const clubs: ClubsModel[] = JSON.parse(dataJson)

  return clubs
}

export const getlistClubID = async (
  id: number
): Promise<ClubsModel | undefined> => {
  const dataID = await fs.readFile(PATHJSON, LANGUAGE)
  let clubID = JSON.parse(dataID)

  clubID = clubID.find((clubs: ClubsModel) => clubs.id == id)

  return clubID
}

export const insertClubs = async (club: ClubsModel) => {
  const dataFile = await fs.readFile(PATHJSON, LANGUAGE)
  let dataPush = JSON.parse(dataFile)

  dataPush.push(club)

  await fs.writeFile(PATHJSON, JSON.stringify(dataPush, null, 2), LANGUAGE)

  return dataPush
}

export const deleteOneClub = async (id: number) => {
  const index = await fs.readFile(PATHJSON, LANGUAGE)
  let dataIndex = JSON.parse(index)

  let fileIndex = dataIndex.findIndex((club: ClubsModel) => club.id === id)

  if (fileIndex !== -1) {
    dataIndex.splice(fileIndex, 1)

    await fs.writeFile(PATHJSON, JSON.stringify(dataIndex, null, 2), LANGUAGE)

    return true
  }

  return false
}

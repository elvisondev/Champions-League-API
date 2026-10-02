import path from 'path'
import { ClubsModel } from '../models/clubs-model'
import fs from 'fs/promises'

const DEFAULT_JSON = path.join('./src/data/clubs.json')
const LANGUAGE = 'utf-8'

export const findAllClubs = async (): Promise<ClubsModel[]> => {
  const dataJson = await fs.readFile(DEFAULT_JSON, LANGUAGE)
  const clubs: ClubsModel[] = JSON.parse(dataJson)

  return clubs
}

export const getlistClubID = async (
  id: number
): Promise<ClubsModel | undefined> => {
  const dataID = await fs.readFile(DEFAULT_JSON, LANGUAGE)
  let clubID = JSON.parse(dataID)

  clubID = clubID.find((clubs: ClubsModel) => clubs.id == id)

  return clubID
}

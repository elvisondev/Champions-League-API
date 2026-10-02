import * as httpResponse from '../utils/http-help'
import * as clubRepositories from '../repositories/clubs-repositorys'
import { ClubsModel } from '../models/clubs-model'

export const getClubsServices = async () => {
  const data = await clubRepositories.findAllClubs()

  const response = httpResponse.OK(data)

  return response
}

export const getClubsByIdServices = async (id: number) => {
  let response = null
  const findID = await clubRepositories.getlistClubID(id)
  if (findID) {
    response = await httpResponse.OK(findID)
  } else {
    response = await httpResponse.NO_CONTENT()
  }
  return response
}

export const createClubServices = async (club: ClubsModel) => {
  let response = null

  const verifyID = await clubRepositories.getlistClubID(club.id)

  if (verifyID) {
    return await httpResponse.CONFLICT()
  } else {
    await clubRepositories.insertClubs(club)
    response = httpResponse.CREATED()
  }
  return response
}

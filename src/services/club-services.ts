import * as httpResponse from '../utils/http-help'
import * as clubRepositories from '../repositories/clubs-repositorys'

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

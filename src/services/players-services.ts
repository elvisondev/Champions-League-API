import { findAllPlayers } from '../repositories/players-repository';
import {NO_CONTENT, OK } from '../utils/http-help'


export const getPlayerServices = async () => {
  const dataPlayer = await findAllPlayers();
  let response = null;

  if (dataPlayer) {
    response = await OK(dataPlayer)
  } else {
    response = await NO_CONTENT(dataPlayer)
  };

  return response;
};

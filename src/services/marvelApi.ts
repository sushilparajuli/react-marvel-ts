//utils
import generateAuthQueryString from '../utils/generateAuthQuery'

//types
import { CharactersResponse } from '../types/characters.type'

export type FetchCharactersPayloadType = {
  offset: number
}

export const fetchCharacters = async (
  payload: FetchCharactersPayloadType
): Promise<CharactersResponse> => {
  const limit = 30
  const offset = payload.offset

  const authString = generateAuthQueryString()
  const queryString = `?limit=${limit}&offset=${offset}&${authString}`
  const res = await fetch(
    `${process.env.REACT_APP_MARVEL_SERVER_URL}/characters${queryString}`
  )
  const characters: CharactersResponse = await res.json()
  return characters
}

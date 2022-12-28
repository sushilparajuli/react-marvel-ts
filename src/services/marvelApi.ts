//utils
import generateAuthQueryString from '../utils/generateAuthQuery'

//types
import { CharactersResponse } from '../types/characters.type'

export type FetchCharactersPayloadType = {
  orderBy: string
  limit: number
  offset: number
  searchQuey?: string
}

export const fetchCharacters = async (
  payload: FetchCharactersPayloadType
): Promise<CharactersResponse> => {
  const { offset, orderBy, limit, searchQuey } = payload
  let searchParams = ''

  if (searchQuey?.trim().indexOf(' ') !== -1) {
    searchParams =
      searchQuey !== '' ? `name=${searchQuey?.replace(/ /g, '-')}&` : ''
  } else {
    searchParams = searchQuey !== '' ? `nameStartsWith=${searchQuey}&` : ''
  }

  const authString = generateAuthQueryString()
  const queryString = `?${searchParams}orderBy=${orderBy}&limit=${limit}&offset=${offset}&${authString}`
  const res = await fetch(
    `${process.env.REACT_APP_MARVEL_SERVER_URL}/characters${queryString}`
  )

  const characters: CharactersResponse = await res.json()
  return characters
}

export type FetchCharacterDetailsPayloadType = {
  id?: string
}

export const fetchCharactersDetails = async (
  payload: FetchCharacterDetailsPayloadType
): Promise<CharactersResponse> => {
  const { id } = payload
  const authString = generateAuthQueryString()
  const res = await fetch(
    `${process.env.REACT_APP_MARVEL_SERVER_URL}/characters/${id}?${authString}`
  )
  const characters: CharactersResponse = await res.json()
  return characters
}

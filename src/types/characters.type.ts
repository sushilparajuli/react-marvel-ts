import { Comics } from './comics.type'
import { Stories } from './stories.type'
import { Thumbnail } from './thumbnail'

export interface CharactersResponse {
  data: Data
}

export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: CharacterData[]
}

export interface CharacterData {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: Comics
  series: Comics
  stories: Stories
  events: Comics
}

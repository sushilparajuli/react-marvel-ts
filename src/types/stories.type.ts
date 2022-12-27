export enum ItemType {
  Cover = 'cover',
  Empty = '',
  InteriorStory = 'interiorStory',
}

export interface StoriesItem {
  resourceURI: string
  name: string
  type: ItemType
}

export interface Stories {
  available: number
  collectionURI: string
  items: StoriesItem[]
  returned: number
}

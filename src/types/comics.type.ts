export interface ComicsItem {
  resourceURI: string
  name: string
}

export interface Comics {
  available: number
  collectionURI: string
  items: ComicsItem[]
  returned: number
}

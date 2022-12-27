export enum URLType {
  Comiclink = 'comiclink',
  Detail = 'detail',
  Wiki = 'wiki',
}

export interface URL {
  type: URLType
  url: string
}

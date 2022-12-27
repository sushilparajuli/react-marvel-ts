export enum Extension {
  Gif = 'gif',
  Jpg = 'jpg',
}
export interface Thumbnail {
  path: string
  extension: Extension
}

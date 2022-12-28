import dayjs from 'dayjs'

export const LETTER_MONTH_FORMAT = 'MMM DD, YYYY'

export const formatDate = (value: string, divider = '-'): string =>
  dayjs(value).format(`YYYY${divider}MM${divider}DD`)

export const getMonth = (value: string): string => dayjs(value).format(`MMMM`)

export const format = (d: string, f: string): string => dayjs(d).format(f)

export const formatDateToString = (value: Date): string =>
  value?.toLocaleDateString('en-GB').split('/').reverse().join('')

import { titles } from './data'
import { Title } from './types'

export const findTitle = ({ id }: { id: string }): Title | null =>
  titles.find((title) => title.id === id) ?? null

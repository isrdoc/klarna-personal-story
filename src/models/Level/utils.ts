import { levels } from './data'
import { Level } from './types'

export const findLevel = ({ id }: { id: string }): Level | null =>
  levels.find((level) => level.id === id) ?? null

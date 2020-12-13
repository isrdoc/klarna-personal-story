import { competencies } from './data'
import { Competency } from './types'

export const findCompetency = ({ id }: { id: string }): Competency | null =>
  competencies.find((competency) => competency.id === id) ?? null

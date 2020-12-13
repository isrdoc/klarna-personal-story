import { Competency } from '../Competency/types'
import { Level } from '../Level/types'

export interface Title {
  id: string
  name: string

  competency?: Competency | null
  level?: Level | null
}

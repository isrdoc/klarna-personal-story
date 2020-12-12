import { Competency } from '../../Competency/types'
import { Level } from '../../Level/types'

export type Title = {
  id: string
  name: string

  // Relations
  competency: Competency
  level: Level
}

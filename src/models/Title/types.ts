import { Competency } from '../Competency/types'
import { Level } from '../Level/types'
import { Impact } from '../Impact/types'

export interface Title {
  id: string
  name: string

  competency?: Competency | null
  level?: Level | null
  impact?: Impact | null
}

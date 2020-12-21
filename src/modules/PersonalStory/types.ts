import { Story } from '../../models/Person/types'

export interface Article extends Story {
  person: string
}

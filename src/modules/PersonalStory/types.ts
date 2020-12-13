import { Person, Story } from '../../models/Person/types'

interface FromPerson {
  id: Person['id']
}

export interface Article extends FromPerson, Story {
  person: string
}

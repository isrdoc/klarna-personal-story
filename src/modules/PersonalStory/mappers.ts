import { Article } from '../types/Article'
import { Person } from '../../models/Person/types/Person'

type Props = {
  person: Person
}

export function mapToArticle({ person }: Props): Article {
  return {
    id: person.id,
    person: `${person.firstName} ${person.lastName}`,
    ...person.story,
  }
}

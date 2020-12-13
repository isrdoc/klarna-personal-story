import { Article } from './types'
import { Person } from '../../models/Person/types'

export interface MapToArticleProps {
  person: Person
}

export function mapToArticle({ person }: MapToArticleProps): Article {
  const article: Article = Object.assign(
    {},
    {
      id: person.id,
      person: `${person.firstName} ${person.lastName}`,
    },
    person.story,
  )

  return article
}

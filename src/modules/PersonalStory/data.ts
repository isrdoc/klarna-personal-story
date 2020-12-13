import { Article } from './types'
import { mapToArticle } from './mappers'
import { people } from '../../models/Person/data'

const IgorSrdoc = people.find((person) => person.id === 'igor-srdoc')
const IgorSrdocArticle: Article = mapToArticle({ person: IgorSrdoc })

const AlexandreBorel = people.find((person) => person.id === 'alexandre-borel')
const AlexandreBorelArticle: Article = mapToArticle({ person: AlexandreBorel })

const articles: Article[] = [IgorSrdocArticle, AlexandreBorelArticle]

export default articles

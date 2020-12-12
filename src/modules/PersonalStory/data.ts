import { Article } from './types'
import { mapToArticle } from './mappers'
import { people } from '../../models/Person/data'

const IgorSrdoc = people.find((person) => person.id === 'igor-srdoc')
const IgorSrdocArticle: Article = mapToArticle({ person: IgorSrdoc })

const articles: Article[] = [IgorSrdocArticle]

export default articles

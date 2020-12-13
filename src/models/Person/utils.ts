import { people } from './data'
import { Person } from './types'

export const findPerson = ({ id }: { id: string }): Person | null =>
  people.find((person) => person.id === id) ?? null

import { Story } from './Story'
import { Title } from '../../Title/types/Title'

export type Person = {
  id: string
  firstName: string
  lastName: string

  // Embeds
  story: ?Story

  // References
  title: ?Title
}

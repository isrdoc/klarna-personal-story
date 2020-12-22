import { impacts } from './data'
import { Impact } from './types'

export const findImpact = ({ id }: { id: string }): Impact | null =>
  impacts.find((impact) => impact.id === id) ?? null

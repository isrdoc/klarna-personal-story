import { FC } from 'react'
import { PersonalStory } from '../../types'

type Props = {
  personalStory: PersonalStory
}

// PersonalStory Screen
export default function Article({ personalStory }: Props): FC {
  const { person } = personalStory
  const { firstName, lastName } = person

  return (
    <article>
      Personal story of {firstName} {lastName}
    </article>
  )
}

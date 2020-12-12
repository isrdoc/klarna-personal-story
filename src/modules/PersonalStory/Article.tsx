import { FC } from 'react'
import { Article as ArticleType } from '../types/Article'

type Props = {
  article: ArticleType
}

export default function Article({ article }: Props): FC {
  const { person, title } = article

  // console.log(article)

  return (
    <article>
      Personal story of {person}. Their title is {title}
    </article>
  )
}

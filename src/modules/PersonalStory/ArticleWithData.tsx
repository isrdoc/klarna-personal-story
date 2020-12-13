import React, { Suspense, useState, useEffect } from 'react'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

import { useGet as useGetPerson } from '../../models/Person/api'

import { Article } from './types'
import { mapToArticle } from './mappers'

const LazyArticle = React.lazy(() => import('./Article'))

interface Props {
  id: string
}

export default function ArticleWithData({ id }: Props): JSX.Element {
  const [error, setError] = useState<Error | undefined>(undefined)
  const [article, setArticle] = useState<Article | undefined | null>(undefined)

  const [personError, person, isLoading] = useGetPerson({ id })

  useEffect(() => {
    if (isLoading) setError(undefined)
    if (personError) setError(personError)
    if (person) setArticle(mapToArticle({ person }))
  }, [id, isLoading, person, personError])

  return (
    <>
      {isLoading && <Loading />}
      {error && !isLoading && <Error message={error.message} />}

      {article && (
        <Suspense fallback={<Loading />}>
          <LazyArticle article={article} />
        </Suspense>
      )}
    </>
  )
}

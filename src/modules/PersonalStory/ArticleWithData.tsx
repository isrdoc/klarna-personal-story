import React, { FC, Suspense } from 'react'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

import { useMockData } from './hooks'

import useFetch from '../../hooks/useFetch'
import { mapToArticle } from './mappers'

const LazyArticle = React.lazy(() => import('./Article'))

type Props = {
  id: string
  useMock: boolean
}

export default function ArticleWithData({ id, useMock = false }: Props): FC {
  let response, isLoading, hasError, error, article

  if (useMock) {
    ;[response, isLoading, hasError] = useMockData({ id, willFail: false })
    article = response
  }

  if (!useMock) {
    const url = 'api/person'
    const opts = {}
    ;[response, isLoading, hasError] = useFetch({ url, opts })

    if (!hasError) article = mapToArticle({ person: response })
    if (hasError) error = response
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <Error message={error} />
      ) : (
        <Suspense fallback={<Loading />}>
          {article && <LazyArticle article={article} />}
        </Suspense>
      )}
    </>
  )
}

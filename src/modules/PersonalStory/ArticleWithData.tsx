import React, { FC, Suspense } from 'react'

import { useMockData } from './hooks'

import useFetch from '../../hooks/useFetch'
import { mapToArticle } from './mappers'

const LazyArticle = React.lazy(() => import('./Article'))

type Props = {
  id: string
  useMock: boolean
}

export default function ArticleWithData({ id, useMock = false }: Props): FC {
  let response, loading, hasError, article

  if (useMock) {
    ;[response, loading, hasError] = useMockData({ id })
    article = response
  }

  if (!useMock) {
    const url = 'api/person'
    const opts = {}
    ;[response, loading, hasError] = useFetch({ url, opts })
    article = mapToArticle({ person: response })
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyArticle article={article} />
        </Suspense>
      )}
    </>
  )
}

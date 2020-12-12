import { useState, useEffect } from 'react'

import articles from './data'

type Props = {
  id: string
  willFail: boolean
}

export function useMockData({ id, willFail = false }: Props): Array {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
    setLoading(true)

    setTimeout(() => {
      const article = articles.find((article) => article.id === id)

      if (willFail) setHasError(true)
      if (!willFail) setResponse(article)

      setLoading(false)
    }, 2000)
  }, [id])

  return [response, loading, hasError]
}

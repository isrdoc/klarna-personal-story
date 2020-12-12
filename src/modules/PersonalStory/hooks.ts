import { useState, useEffect } from 'react'

import articles from './data'

export function useMockData({ id }: Props): Array {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setHasError(false)
    setLoading(true)

    setTimeout(() => {
      const article = articles.find((article) => article.id === id)

      setResponse(article)
      // setHasError(true)
      setLoading(false)
    }, 2000)
  }, [id])

  return [response, loading, hasError]
}

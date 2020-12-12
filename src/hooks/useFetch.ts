import { useState, useEffect } from 'react'

type Props = {
  url: string
  opts: RequestInit
}

export default function useFetch({ url, opts }: Props): Array {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch(url, opts)
      .then((res) => {
        setResponse(res.data)
        setLoading(false)
      })
      .catch(() => {
        setHasError(true)
        setLoading(false)
      })
  }, [url])

  return [response, loading, hasError]
}

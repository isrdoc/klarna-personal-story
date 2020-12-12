import { useState, useEffect } from 'react'

type Props = {
  url: string
  opts: RequestInit
}

export default function useFetch({ url, opts }: Props): Array {
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    fetch(url, opts)
      .then((res) => {
        setResponse(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setHasError(true)
        setResponse(error)
        setIsLoading(false)
      })
  }, [url])

  return [response, isLoading, hasError]
}

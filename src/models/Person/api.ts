import { useState, useEffect } from 'react'

import { Person } from './types'
import { findPerson } from './utils'

const getConfig = {
  url: 'api/person',
  useMock: true,
  timeout: 2000,
  willResolve: true,
}

type GetProps = {
  id: string
}

export type GetReturn = [Error | undefined, Person | undefined | null, boolean]

export function useFetchGet({ id }: GetProps): GetReturn {
  const [error, setError] = useState<Error | undefined>(undefined)
  const [data, setData] = useState<Person | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const url = `${getConfig.url}?id=${id}`

    setIsLoading(true)

    fetch(url)
      .then((res: Response) => {
        return res.json()
      })
      .then((json) => {
        setData(json)
        setError(undefined)
        setIsLoading(false)
      })
      .catch((err: Error) => {
        setError(err)
        setIsLoading(false)
      })
  }, [id])

  return [error, data, isLoading]
}

export function useMockGet({ id }: GetProps): GetReturn {
  const [error, setError] = useState<Error | undefined>(undefined)
  const [data, setData] = useState<Person | undefined | null>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { timeout, willResolve } = getConfig

  useEffect(() => {
    const person: Person | null = findPerson({ id })
    const mockError = new Error('Could not fetch Personal Story article')

    setIsLoading(true)

    new Promise<Person | null>((resolve, reject) => {
      setTimeout(() => {
        willResolve ? resolve(person) : reject(mockError)
      }, timeout)
    })
      .then((pers) => {
        setData(pers)
        setError(undefined)
        setIsLoading(false)
      })
      .catch((err: Error) => {
        setError(err)
        setIsLoading(false)
      })
  }, [id, timeout, willResolve])

  return [error, data, isLoading]
}

export const useGet = getConfig.useMock ? useMockGet : useFetchGet

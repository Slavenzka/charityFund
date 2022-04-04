import { useEffect, useState, useRef } from 'react'

function useDebounce<T> (value: T, delay = 500) {
  const handlerRef = useRef<NodeJS.Timeout | null>(null)
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    if (!handlerRef.current) {
      setDebounceValue(value)
    }

    handlerRef.current = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => clearTimeout(handlerRef.current as NodeJS.Timeout)
  }, [value, delay])

  return debounceValue
}

export default useDebounce

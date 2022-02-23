import { useEffect, useState, useRef } from 'react'

const useDebounce = (value, delay = 500) => {
  const handlerRef = useRef(null)
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    if (!handlerRef.current) {
      setDebounceValue(value)
    }

    handlerRef.current = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => clearTimeout(handlerRef.current)
  }, [value, delay])

  return debounceValue
}

export default useDebounce

import { useState, useRef, useEffect, useCallback } from 'react'

interface useIntersectionObserverProps {
  element: HTMLElement,
  margins?: string
}

function useIntersectionObserver ({
  element,
  margins = `0% 0% -5% 0%`
}: useIntersectionObserverProps) {
  const [isVisible, setVisibility] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)

  const handleIntersection: IntersectionObserverCallback = useCallback(entries => {
    entries.forEach(entry => {
      setVisibility(entry.isIntersecting)
    })
  }, [])


  useEffect(() => {
    const observedNode = element
    if (observedNode && !observer.current) {
      observer.current = new IntersectionObserver(handleIntersection, {
        rootMargin: margins,
        threshold: 1.0
      })

      observer.current.observe(observedNode)
    }

    return () => {
      if (observedNode && observer.current) {
        observer.current.unobserve(observedNode)
        observer.current = null
      }
    }
  }, [element, handleIntersection, margins])

  return isVisible
}

export default useIntersectionObserver

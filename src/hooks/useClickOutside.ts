import { useCallback, useEffect, useRef } from 'react'

function useClickOutside ({handleClickOutside}: {handleClickOutside: () => void}) {
  const targetRef = useRef<HTMLElement | null>(null)
  
  const handleClick = useCallback(evt => {
    if (targetRef.current) {
      const target = targetRef.current as HTMLElement
      const isClickedInsideTarget = target.contains(evt.target)
      // react-select options are a special case due to the way these options are rendered
      const isClickedSelectOption = evt.target.dataset?.selectOption
      
      if (!isClickedInsideTarget && !isClickedSelectOption && handleClickOutside) {
        handleClickOutside()
      }
    }
  }, [handleClickOutside])
  
  useEffect(() => {
    if (targetRef.current) {
      document.addEventListener(`click`, handleClick)
    }
    
    return () => {
      if (targetRef.current) {
        document.removeEventListener(`click`, handleClick)
      }
    }
  }, [handleClick])
  
  const setTargetRef = useCallback((node: HTMLElement) => {
    targetRef.current = node
  }, [])
  
  return {
    setTargetRef
  }
}

export default useClickOutside
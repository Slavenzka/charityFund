import { useCallback, useEffect, useRef } from 'react'

function useClickOutside ({handleClickOutside}) {
  const targetRef = useRef(null)
  
  const handleClick = useCallback(evt => {
    const isClickedInsideTarget = targetRef.current.contains(evt.target)
    // react-select options are a special case due to the way these options are rendered
    const isClickedSelectOption = evt.target.dataset?.selectOption
    
    if (!isClickedInsideTarget && !isClickedSelectOption && handleClickOutside) {
      handleClickOutside()
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
  
  const setTargetRef = useCallback(node => {
    targetRef.current = node
  }, [])
  
  return {
    setTargetRef
  }
}

export default useClickOutside
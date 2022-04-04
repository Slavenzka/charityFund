import { useState, useEffect, useRef, useCallback } from 'react'
import css from 'styles/headerController/headerController.module.scss'
import classnames from 'classnames'
import { throttle } from 'utils'

function useHeaderTypeController () {
  const [className, setClassName] = useState<string[]>([css.header])
  const scrollTop = useRef<number>(0)
  
  const removeClassName = useCallback(className => {
    setClassName(prevState => {
      const state = prevState.slice()
      const targetIndex = state.findIndex(item => item === className)
      
      if (targetIndex >= 0) {
        return ([] as string[]).concat(state.slice(0, targetIndex), state.slice(targetIndex + 1))
      }
      
      return state
    })
  }, [])
  
  const addClassName: (className: string) => void = useCallback(className => {
    setClassName(prevState => {
      const state = prevState.slice()
      
      if (!state.includes(className)) {
        state.push(className)
      }
      
      return state
    })
  }, [])
  
  const watchScrollPosition = useCallback(() => {
    const scrollY = window.scrollY
    const isScrollingUp = scrollY < scrollTop.current
    const isScrollingDown = !isScrollingUp
    const isTop = scrollY === 0
    
    if (isTop) {
      removeClassName(css[`scroll-up`])
      removeClassName(css[`scroll-down`])
    }

    if (isScrollingDown && !isTop) {
      addClassName(css[`scroll-down`])
      removeClassName(css[`scroll-up`])
    }

    if (isScrollingUp && !isTop) {
      removeClassName(css[`scroll-down`])
      addClassName(css[`scroll-up`])
    }

    scrollTop.current = scrollY;

  }, [addClassName, removeClassName])

  useEffect(() => {
    window.addEventListener(`scroll`, () => {
      throttle(watchScrollPosition, 250)
    })
  }, [watchScrollPosition])

  return {
    className: classnames(...className),
  }
}

export default useHeaderTypeController

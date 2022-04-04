import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'

function useGlobalHeaderPadding () {
  const headerRef = useRef<HTMLElement | null>(null)
  const fontSize = useSelector((store: RootReducerType) => store.elastic.curFontSize)

  function setHeaderRef (node: HTMLElement) {
    headerRef.current = node
  }

  useEffect(() => {
    if (headerRef.current && fontSize) {
      document.body.style.paddingTop = `${headerRef.current.getBoundingClientRect().height}px`
    }
  }, [fontSize])

  return {
    setHeaderRef,
  }
}

export default useGlobalHeaderPadding

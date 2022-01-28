import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

function useGlobalHeaderPadding () {
  const headerRef = useRef(null)
  const fontSize = useSelector(store => store.elastic.curFontSize)

  function setHeaderRef (node) {
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

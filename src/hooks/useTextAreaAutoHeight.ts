import { useEffect } from 'react'

function useTextAreaAutoHeight ({
  elementRef,
  defaultHeight = `auto`
}: {
  elementRef: HTMLTextAreaElement,
  defaultHeight?: string
}) {
  useEffect(() => {
    const textarea = elementRef
    
    function handleUpdateInputHeight () {
      textarea.style.height = defaultHeight
      textarea.style.height = textarea.scrollHeight + 'px'
    }

    if (textarea) {
      handleUpdateInputHeight()
      textarea.addEventListener(`input`, handleUpdateInputHeight)
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener(`input`, handleUpdateInputHeight)
      }
    }
  }, [defaultHeight, elementRef])
}

export default useTextAreaAutoHeight

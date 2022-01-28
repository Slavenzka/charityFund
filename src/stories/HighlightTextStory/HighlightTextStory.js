import React from 'react'
import css from './HighlightTextStory.module.scss'

const HighlightTextStory = ({
  extStyles = {},
  children,
}) => {
  return (
    <span
      className={css.wrapper}
      style={{
        ...extStyles
      }}
    >
      { children }
    </span>
  )
}

export default HighlightTextStory

import React, { PropsWithChildren } from 'react'
import css from './HighlightTextStory.module.scss'
import { StoriesComponentPropsTemplate } from 'stories/specs/index.spec'

const HighlightTextStory = ({
  extStyles = {},
  children,
}: PropsWithChildren<StoriesComponentPropsTemplate>) => {
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

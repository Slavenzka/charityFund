import React, { PropsWithChildren } from 'react'
import css from './DescriptionStory.module.scss'
import { StoriesComponentPropsTemplate } from 'stories/specs/index.spec'

function DescriptionStory ({
  extStyles = {},
  children
}: PropsWithChildren<StoriesComponentPropsTemplate>) {
  return (
    <div
      className={css.description}
      style={{
        ...extStyles
      }}
    >
      { children }
    </div>
  )
}

export default DescriptionStory

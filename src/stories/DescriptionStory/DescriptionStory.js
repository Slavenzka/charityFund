import React from 'react'
import css from './DescriptionStory.module.scss'

const DescriptionStory = ({
  extStyles = {},
  children
}) => {
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

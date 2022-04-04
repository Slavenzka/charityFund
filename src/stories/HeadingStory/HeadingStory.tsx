import React from 'react'
import css from './HeadingStory.module.scss'
import classnames from 'classnames'
import { HeadingTypes } from "components/atoms/Heading/Heading.spec"
import { HeadingStoryProps } from "stories/HeadingStory/HeadingStory.spec"

const HeadingStory: React.FC<HeadingStoryProps> = ({
  label,
  className,
  type = HeadingTypes.H2,
  tagName,
  isUnderlined,
  extStyles = {},
  children,
  ...props
}) => {
  const TagName = tagName ?? type

  return (
    <TagName
      className={classnames(css.heading, className, {
        [css.h2]: type === HeadingTypes.H2,
        [css.h3]: type === HeadingTypes.H3,
        [css.underlined]: isUnderlined
      })}
      style={{...extStyles}}
      {...props}
    >
      { label || children }
    </TagName>
  )
}

export default HeadingStory

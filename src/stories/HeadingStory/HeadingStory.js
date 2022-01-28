import React from 'react'
import css from './HeadingStory.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { HeadingTypes } from 'components/atoms/Heading/Heading'

const HeadingStory = ({
  label,
  className,
  type = HeadingTypes.H2,
  tagName,
  isUnderlined,
  extStyles = {},
  children,
  ...props
}) => {
  const TagName = type || tagName

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

HeadingStory.propTypes = {
  /*
  * Heading text content
  * */
  label: PropTypes.string,
  /*
  * External css class
  * */
  className: PropTypes.string,
  /*
  * Heading style presets connected to heading tag name
  * */
  type: PropTypes.oneOf([HeadingTypes.H2, HeadingTypes.H3])
}

export default HeadingStory

import { memo } from 'react'
import css from './Heading.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const HeadingTypes = {
  H1: `h1`,
  H2: `h2`,
  H3: `h3`,
  H4: `h4`,
}

function Heading ({
  className,
  type = HeadingTypes.H2,
  children,
  ...props
}) {
  const TagName = type ?? HeadingTypes.H2
  
  return (
    <TagName
      className={classnames(css.wrapper, className, css[TagName])}
      {...props}
    >
      { children }
    </TagName>
  )
}

Heading.propTypes = {
  /*
  * Content of the component
  */
  children: PropTypes.node,
  /*
  * Optional external class name, that would be added to heading
  */
  className: PropTypes.string,
  /*
  * Triggers application of class name according to its value from HeadingTypes enum
  */
  type: PropTypes.oneOf(Object.values(HeadingTypes)),
}

Heading.defaultProps = {
  type: HeadingTypes.H2
}

export default memo(Heading)
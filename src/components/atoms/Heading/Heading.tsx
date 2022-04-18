import { memo } from 'react'
import css from './Heading.module.scss'
import classnames from 'classnames'
import { HeadingProps, HeadingTypes } from "components/atoms/Heading/Heading.spec"

function Heading ({
  className,
  headingType = HeadingTypes.H2,
  headingStyle = HeadingTypes.H2,
  children,
  ...props
}: HeadingProps) {
  const TagName = headingType ?? HeadingTypes.H2
  
  return (
    <TagName
      className={classnames(css.wrapper, className, css[headingStyle])}
      {...props}
    >
      { children }
    </TagName>
  )
}

export default memo(Heading)
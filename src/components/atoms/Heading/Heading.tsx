import { FC, memo } from 'react'
import css from './Heading.module.scss'
import classnames from 'classnames'
import { HeadingProps, HeadingTypes } from "components/atoms/Heading/Heading.spec"

const Heading: FC<HeadingProps> = ({
  className,
  type = HeadingTypes.H2,
  children,
  ...props
}) => {
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

export default memo(Heading)
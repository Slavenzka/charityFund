import { memo } from 'react'

function Template ({
  className,
  children,
  TagName = `div`,
  ...props
}) {
  return (
    <TagName className={className} {...props}>
      { children }
    </TagName>
  )
}

export default memo(Template)
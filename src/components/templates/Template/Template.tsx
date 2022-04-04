import { memo } from 'react'
import { TemplateProps } from 'components/templates/Template/Template.spec'

function Template ({
  className,
  children,
  TagName = `div`,
  ...props
}: TemplateProps) {
  return (
    <TagName className={className} {...props}>
      { children }
    </TagName>
  )
}

export default memo(Template)
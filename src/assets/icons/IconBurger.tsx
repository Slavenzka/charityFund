import { IconProps } from 'assets/icons/Icon.spec'

function IconBurger ({
  className
}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 30 25" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="3" />
      <rect y="11" width="30" height="3" />
      <rect y="22" width="30" height="3" />
    </svg>
  )
}

export default IconBurger
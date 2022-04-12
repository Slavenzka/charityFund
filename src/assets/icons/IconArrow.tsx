import React from "react";
import { IconProps } from "assets/icons/Icon.spec"

const IconArrow: React.FC<IconProps> = ({
  className
}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 31">
      <path d="M39.6924 0.446655L37.2563 2.88061L48.0972 13.7113H0V17.1534H48.0972L37.2563 27.984L39.6924 30.4179L54.6925 15.4322L39.6924 0.446655Z" />
    </svg>
  )
}

export default IconArrow
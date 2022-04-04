import { FC, memo } from 'react'
import css from './FormItemError.module.scss'
import classnames from 'classnames'
import { FormItemErrorProps } from 'components/atoms/FormItemError/FormItemError.spec'

const FormItemError: FC<FormItemErrorProps> = ({
  className,
  message
}) => {
  return (
    <span className={classnames(css.wrapper, className)}>
      { message }
    </span>
  )
}

export default memo(FormItemError)
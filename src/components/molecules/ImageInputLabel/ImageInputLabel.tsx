import { FC, memo, PropsWithChildren } from 'react'
import css from './ImageInputLabel.module.scss'
import classnames from 'classnames'
import FormItemError from 'components/atoms/FormItemError/FormItemError'
import { ImageInputLabelProps } from 'components/molecules/ImageInputLabel/ImageInputLabel.spec'

const ImageInputLabel: FC<PropsWithChildren<ImageInputLabelProps>> = ({
  children,
  className,
  error
}) => {
  return (
    <label className={classnames(css.label, className)}>
      +Add photo
      { children }
      {error && <FormItemError message={error} />}
    </label>
  )
}

export default memo(ImageInputLabel)
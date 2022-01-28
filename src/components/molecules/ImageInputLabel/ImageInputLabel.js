import { memo } from 'react'
import css from './ImageInputLabel.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import FormItemError from 'components/atoms/FormItemError/FormItemError'

function ImageInputLabel ({
  children,
  className,
  error
}) {
  return (
    <label className={classnames(css.label, className)}>
      +Add photo
      { children }
      {error && <FormItemError message={error} />}
    </label>
  )
}

ImageInputLabel.propTypes = {
  /*
  * Contents of label tag
  */
  children: PropTypes.node,
  /*
  * Optional external class name, that would be added to label tag
  */
  className: PropTypes.string,
  /*
  * Error message from form management code
  */
  error: PropTypes.string,
}

export default memo(ImageInputLabel)
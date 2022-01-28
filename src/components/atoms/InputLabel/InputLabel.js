import { memo } from 'react'
import css from './InputLabel.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import he from 'he'

function InputLabel ({
  children,
  className,
  isRequired,
  label
}) {
  return (
    <label
      className={classnames(css.wrapper, className, {
        [css.wrapperRequired]: isRequired && Boolean(label)
      })}
    >
      {label && (
        <span
          className={css.label}
        >
          { he.encode(label) }
        </span>
      )}
      { children }
    </label>
  )
}

InputLabel.propTypes = {
  /*
  * Provides content of the label, e.g. input element
  */
  children: PropTypes.any,
  /*
  * External class name
  */
  className: PropTypes.string,
  /*
  * Toggles application of "required" styles
  */
  isRequired: PropTypes.bool,
  /*
  * Toggles application of "required" styles
  */
  label: PropTypes.string,
}

export default memo(InputLabel)
import { FC, memo, PropsWithChildren } from 'react'
import css from './InputLabel.module.scss'
import classnames from 'classnames'
import he from 'he'
import { InputLabelProps } from 'components/atoms/InputLabel/InputLabel.spec'

const InputLabel: FC<PropsWithChildren<InputLabelProps>> = ({
  children,
  className,
  isRequired,
  label
}) => {
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
          {typeof label === `string`
            ? he.encode(label)
            : label
          }
        </span>
      )}
      { children }
    </label>
  )
}

export default memo(InputLabel)
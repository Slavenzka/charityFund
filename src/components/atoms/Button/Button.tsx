import { FC, memo, PropsWithChildren } from 'react'
import css from './Button.module.scss'
import classnames from 'classnames'
import {
  ButtonHeights,
  ButtonProps,
  ButtonVariants,
} from './Button.spec'
import ButtonDefault from 'components/atoms/Button/ButtonDefault'

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  height = ButtonHeights.REGULAR,
  variant = ButtonVariants.DEFAULT,
  ...restProps
}) => {
  const heightClassName = classnames({
    [css.buttonHeightSmall]: height === ButtonHeights.SMALL,
    [css.buttonHeightRegular]: height === ButtonHeights.REGULAR,
    [css.buttonHeightLarge]: height === ButtonHeights.LARGE,
  })

  switch (variant) {
    default:
      return (
        <ButtonDefault
          className={classnames(className, heightClassName)}
          {...restProps}
        />
      )
  }
}

export default memo(Button)
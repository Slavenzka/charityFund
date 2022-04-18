import { memo, useMemo } from 'react'
import css from './ButtonSupportAdaptive.module.scss'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { LanguageOptions } from 'utils/const'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/index.spec'
import IconShip from 'assets/icons/IconShip'

function ButtonSupportAdaptive ({
  className,
}: PropsWithClassName) {
  const lang = useSelector((store: RootReducerType) => store.ui.lang)

  const label = useMemo(() => {
    if (lang === LanguageOptions.UA) return `Допомогти`

    return `Support`
  }, [lang])

  return (
    <a
      href="https://payhub.com.ua/#/payment/zaluzhnoho"
      className={classnames(css.button, className)}
      target="_blank"
      rel="noreferrer noopener"
    >
      {label}
      <span className={css.iconWrapper}>
        <IconShip className={css.icon} />
      </span>
    </a>
  )
}

export default memo(ButtonSupportAdaptive)
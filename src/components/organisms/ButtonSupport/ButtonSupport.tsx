import { memo, useCallback, useMemo } from 'react'
import css from './ButtonSupport.module.scss'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { LanguageOptions } from 'utils/const'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/index.spec'

function ButtonSupport ({
  className
}: PropsWithClassName) {
  const lang = useSelector((store: RootReducerType) => store.ui.lang)

  const label = useMemo(() => {
    if (lang === LanguageOptions.UA) return `Допомогти`

    return `Support`
  }, [lang])

  const handleClickButton = useCallback(() => {
    alert(`Button support is clicked`)
  }, [])

  return (
    <button
      onClick={handleClickButton}
      className={classnames(css.button, className)}
      type="button"
    >
      {label}
    </button>
  )
}

export default memo(ButtonSupport)
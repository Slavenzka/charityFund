import { memo, useCallback } from 'react'
import css from './ButtonLang.module.scss'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { toggleLang } from 'store/actions/ui'
import { LanguageOptions } from 'utils/const'
import { PropsWithClassName } from 'specs/index.spec'

function ButtonLang ({
  className,
  isLight
}: {
  isLight?: boolean
} & PropsWithClassName) {
  const lang = useSelector((store: RootReducerType) => store.ui.lang)
  const dispatch = useDispatch()

  const handleClickButton = useCallback(() => {
    dispatch(toggleLang())
  }, [dispatch])

  return (
    <button
      onClick={handleClickButton}
      className={classnames(css.button, className, {
        [css.buttonLight]: isLight
      })}
      type="button"
    >
      <span
        className={classnames(css.lang, {
          [css.langSelected]: lang === LanguageOptions.UA
        })}
      >
        {LanguageOptions.UA}
      </span>
      <span
        className={classnames(css.lang, {
          [css.langSelected]: lang === LanguageOptions.ENG
        })}
      >
        {LanguageOptions.ENG}
      </span>
    </button>
  )
}

export default memo(ButtonLang)
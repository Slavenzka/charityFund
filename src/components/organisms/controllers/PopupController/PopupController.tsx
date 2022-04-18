import { createContext, memo, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { LanguageOptions } from 'utils/const'
import classnames from 'classnames'
import css from './PopupController.module.scss'

export const PopupContext = createContext<{
  status: boolean,
  updateStatus: ((status: boolean) => void) | null
}>({
  status: false,
  updateStatus: null
})

function PopupController ({
  children
}: {
  children: JSX.Element
}) {
  const [isVisible, setVisibility] = useState(false)
  const lang = useSelector((store: RootReducerType) => store.ui.lang)

  const hidePopup = useCallback(() => {
    setVisibility(false)
    document.removeEventListener(`click`, hidePopup)
    document.removeEventListener(`wheel`, hidePopup)
    document.removeEventListener(`touchmove`, hidePopup)
  }, [])

  useEffect(() => {
    if (isVisible) {
      document.addEventListener(`click`, hidePopup)
      document.addEventListener(`wheel`, hidePopup)
      document.addEventListener(`touchmove`, hidePopup)
    }
  }, [isVisible, hidePopup])

  return (
    <PopupContext.Provider
      value={{
        status: isVisible,
        updateStatus: (status: boolean) => setVisibility(status)
      }}
    >
      <div
        className={classnames(css.popup, {
          [css.popupVisible]: isVisible
        })}
      >
        {lang === LanguageOptions.UA
          ? `IBAN скопійований`
          : `IBAN copied`
        }
      </div>
      {children}
    </PopupContext.Provider>
  )
}

export default memo(PopupController)
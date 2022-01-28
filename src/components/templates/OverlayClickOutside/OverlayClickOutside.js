import { memo } from 'react'
import css from './OverlayClickOutside.module.scss'

function OverlayClickOutside ({
  isActive,
  handleClickOutside,
  zIndex = 0,
  children
}) {
  const contentClassName = isActive
    ? css.content
    : ``
  
  return (
    <>
      {isActive && (
        <div
          className={css.wrapper}
          style={{
            zIndex
          }}
          onClick={handleClickOutside}
        />
      )}
      {children({
        className: contentClassName
      })}
    </>
  )
}

export default memo(OverlayClickOutside)
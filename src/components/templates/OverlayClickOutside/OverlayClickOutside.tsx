import { memo } from 'react'
import css from './OverlayClickOutside.module.scss'
import { OverlayClickOutsideProps } from 'components/templates/OverlayClickOutside/OverlayClickOutside.spec'

function OverlayClickOutside ({
  isActive,
  handleClickOutside,
  zIndex = 0,
  children
}: OverlayClickOutsideProps) {
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
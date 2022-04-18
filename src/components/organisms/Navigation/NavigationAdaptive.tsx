import { memo, useMemo } from 'react'
import css from './NavigationAdaptive.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/index.spec'
import { NavigationData } from 'components/organisms/Navigation/_assets/data'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'

function NavigationAdaptive ({
  className,
  isLight,
  isMinified,
  onClick
}: {
  isLight?: boolean,
  isMinified?: boolean,
  onClick: (id: string) => void
} & PropsWithClassName) {
  const lang = useSelector((store: RootReducerType) => store.ui.lang)
  const selectedWaypoint = useSelector((store: RootReducerType) => store.waypoints.selectedWaypoint)

  const items = useMemo(() => {
    return Object.values(NavigationData).map(({label, id}, index) => (
      <li
        className={classnames(css.item, {
          [css.itemMinified]: isMinified
        })}
        key={index}
      >
        <button
          onClick={() => onClick(id)}
          className={classnames(css.button, {
            [css.buttonLight]: isLight,
            [css.buttonActive]: selectedWaypoint === id
          })}
          type="button"
        >
          {label[lang]}
        </button>
      </li>
    ))
  }, [lang, onClick, isLight, selectedWaypoint, isMinified])

  return (
    <ul className={classnames(css.list, className)}>
      {items}
    </ul>
  )
}

export default memo(NavigationAdaptive)
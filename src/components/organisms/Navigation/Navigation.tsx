import { memo, useCallback, useMemo } from 'react'
import css from './Navigation.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/index.spec'
import { NavigationData } from 'components/organisms/Navigation/_assets/data'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { setActiveWaypoint, setWaypointsStatus } from 'store/actions'

function Navigation ({
  className,
  isLight
}: {
  isLight?: boolean
} & PropsWithClassName) {
  const lang = useSelector((store: RootReducerType) => store.ui.lang)
  const selectedWaypoint = useSelector((store: RootReducerType) => store.waypoints.selectedWaypoint)
  const dispatch = useDispatch()

  const handleClickButton = useCallback(id => {
    dispatch(setActiveWaypoint(id))
    dispatch(setWaypointsStatus(false))

  }, [dispatch])

  const items = useMemo(() => {
    return Object.values(NavigationData).map(({label, id}, index) => (
      <li className={css.item} key={index}>
        <button
          onClick={() => handleClickButton(id)}
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
  }, [lang, handleClickButton, isLight, selectedWaypoint])

  return (
    <ul className={classnames(css.list, className)}>
      {items}
    </ul>
  )
}

export default memo(Navigation)
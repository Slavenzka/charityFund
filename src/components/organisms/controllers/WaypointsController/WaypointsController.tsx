import { memo, useCallback, useEffect, useRef } from 'react'
import {
  WaypointControllerRenderFunction
} from 'components/organisms/controllers/WaypointsController/WaypointController.spec'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { setActiveWaypoint, setWaypointsStatus } from 'store/actions'
import { debounce } from 'utils'

function WaypointsController ({
  children
}: {
  children: WaypointControllerRenderFunction
}) {
  const waypointsSlice = useSelector((store: RootReducerType) => store.waypoints)
  const waypoints = useRef<HTMLElement[]>([])
  const dispatch = useDispatch()

  const {
    selectedWaypoint,
  } = waypointsSlice

  useEffect(() => {
    if (selectedWaypoint && waypoints.current.length > 0) {
      const element = waypoints.current.find(node => node.id === selectedWaypoint) as HTMLElement

      element.scrollIntoView({
        behavior: `smooth`
      })
    }
  }, [selectedWaypoint])

  useEffect(() => {
    const resetWaypoints = debounce(() => {
      dispatch(setWaypointsStatus(true))
      dispatch(setActiveWaypoint(null))
    }, 1500)

    document.addEventListener(`wheel`, resetWaypoints)
    document.addEventListener(`touchmove`, resetWaypoints)
  }, [dispatch])

  const saveWaypoint = useCallback(node => {
    waypoints.current.push(node)
  }, [])

  return children({
    saveWaypoint
  })
}

export default memo(WaypointsController)
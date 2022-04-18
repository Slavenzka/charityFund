import { memo, useCallback, useState } from 'react'
import css from './ActivityItem.module.scss'
import { PropsWithClassName } from 'specs/index.spec'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { DeviceTypes } from 'specs/enum.spec'
import { Waypoint } from 'react-waypoint'

function ActivityItem ({
  className,
  label,
  index
}: {
  label: string,
  index: number
} & PropsWithClassName) {
  const [isVisible, setVisibility] = useState(false)
  const deviceType = useSelector((store: RootReducerType) => store.elastic.deviceType)
  const isAdaptive = deviceType === DeviceTypes.ADAPTIVE

  const handleWaypoint = useCallback(() => {
    if (!isVisible) {
      setTimeout(() => {
        setVisibility(true)
      }, index * 100)
    }
  }, [isVisible, index])

  return (
    <Waypoint
      onEnter={handleWaypoint}
      topOffset={isAdaptive ? "10px" : "300px"}
      bottomOffset={isAdaptive ? "10px" : "300px"}
    >
      <li
        className={classnames(css.wrapper, className, {
          [css.wrapperVisible]: isVisible
        })}
      >
        <span dangerouslySetInnerHTML={{__html: label}} />
      </li>
    </Waypoint>
  )
}

export default memo(ActivityItem)
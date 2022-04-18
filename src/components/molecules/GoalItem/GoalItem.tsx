import { memo, useCallback, useState } from 'react'
import css from './GoalItem.module.scss'
import classnames from 'classnames'
import { GoalItemProps } from 'components/molecules/GoalItem/GoalItem.spec'
import { Waypoint } from 'react-waypoint'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { DeviceTypes } from 'specs/enum.spec'

function GoalItem ({
  className,
  index,
  label
}: GoalItemProps) {
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
        className={classnames(css.item, className, {
          [css.itemVisible]: isVisible
        })}
      >
        <span className={css.counter}>
          {index}
        </span>
        <span
          dangerouslySetInnerHTML={{__html: label}}
          className={css.label}
        />
      </li>
    </Waypoint>
  )
}

export default memo(GoalItem)
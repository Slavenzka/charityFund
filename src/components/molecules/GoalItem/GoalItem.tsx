import { memo } from 'react'
import css from './GoalItem.module.scss'
import classnames from 'classnames'
import { GoalItemProps } from 'components/molecules/GoalItem/GoalItem.spec'

function GoalItem ({
  className,
  index,
  label
}: GoalItemProps) {
  return (
    <li className={classnames(css.item, className)}>
      <span className={css.counter}>
        {index}
      </span>
      <span dangerouslySetInnerHTML={{__html: label}} />
    </li>
  )
}

export default memo(GoalItem)
import { memo } from 'react'
import css from './ActivityItem.module.scss'

function ActivityItem ({
  label
}: {
  label: string
}) {
  return (
    <li className={css.wrapper} dangerouslySetInnerHTML={{__html: label}} />
  )
}

export default memo(ActivityItem)
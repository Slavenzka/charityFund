import { memo } from 'react'
import css from './SupervisorItem.module.scss'
import classnames from 'classnames'
import { SupervisorItemProps } from 'components/molecules/SupervisorItem/SupervisorItem.spec'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'

function SupervisorItem ({
  className,
  name,
  rank,
  photo
}: SupervisorItemProps) {
  return (
    <li className={classnames(css.wrapper, className)}>
      <img
        src={photo}
        className={css.photo}
        alt={name}
      />
      <Heading
        dangerouslySetInnerHTML={{__html: name}}
        className={css.name}
        headingType={HeadingTypes.H3}
        headingStyle={HeadingTypes.H4}
      />
      <p className={css.rank}>
        {rank}
      </p>
    </li>
  )
}

export default memo(SupervisorItem)
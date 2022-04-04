import { FC, memo, PropsWithChildren } from 'react'
import css from './TabItem.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import { TabItemProps } from 'components/atoms/TabItem/TabItem.spec'
import { TabVariants } from 'components/molecules/Tabs/Tabs.spec'

const TabItem: FC<PropsWithChildren<TabItemProps>> = ({
  children,
  className,
  isActive,
  onClick,
  TagName = `li`,
  variant = TabVariants.DEFAULT,
  ...props
}) => {
  return (
    <TagName
      className={classnames(className, {
        [css.wrapperDefault]: variant === TabVariants.DEFAULT,
        [css.wrapperActive]: isActive
      })}
      {...props}
    >
      <Button
        onClick={onClick}
        isDisabled={isActive}
        className={css.button}
      >
        {children}
      </Button>
    </TagName>
  )
}

export default memo(TabItem)
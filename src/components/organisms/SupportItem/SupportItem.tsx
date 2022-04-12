import { memo, useCallback, useState } from 'react'
import css from './SupportItem.module.scss'
import classnames from 'classnames'
import { Collapse } from 'react-collapse'
import { PropsWithClassName } from 'specs/index.spec'

function SupportItem ({
  className,
  label,
  list,
}: {
  label: string,
  list: string[]
} & PropsWithClassName) {
  const [isOpened, toggleOpenedStatus] = useState(false)

  const handleClickButton = useCallback(() => {
    toggleOpenedStatus(prevState => !prevState)
  }, [])

  return (
    <div className={classnames(css.wrapper, className)}>
      <button
        onClick={handleClickButton}
        className={classnames(css.button, {
          [css.buttonOpened]: isOpened
        })}
        type="button"
      >
        {label}
      </button>
      <Collapse
        isOpened={isOpened}
        theme={{
          collapse: `ReactCollapse--collapse`,
          content: css.content
        }}
      >
        <ul className={css.list}>
          {list.map((item, index) => (
            <li className={css.item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  )
}

export default memo(SupportItem)
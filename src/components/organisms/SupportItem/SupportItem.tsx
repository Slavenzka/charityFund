import { memo, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react'
import css from './SupportItem.module.scss'
import classnames from 'classnames'
import { Collapse } from 'react-collapse'
import { PropsWithClassName } from 'specs/index.spec'
import IconCopy from 'assets/icons/IconCopy'
import { PopupContext } from 'components/organisms/controllers/PopupController/PopupController'

function SupportItem ({
  className,
  label,
  list,
  children
}: {
  label: string,
  list?: string[]
} & PropsWithChildren<PropsWithClassName>) {
  const [isOpened, toggleOpenedStatus] = useState(false)
  const {
    updateStatus
  } = useContext(PopupContext)

  const handleClickButton = useCallback(() => {
    toggleOpenedStatus(prevState => !prevState)
  }, [])

  const content = useMemo(() => {
    if (list && !children) {
      const iban = list.find(item => item.toUpperCase().includes(`IBAN`))

      return (
        <div className={css.listWrapper}>
          <button
            onClick={() => {
              navigator.clipboard.writeText(iban as string)
                .then(() => {
                  updateStatus && updateStatus(true)
                })
            }}
            className={css.buttonCopy}
            type="button"
            title="Copy IBAN"
          >
            <IconCopy className={css.icon} />
            Copy IBAN
          </button>
          <ul className={css.list}>
            {list.map((item, index) => (
              <li className={css.item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return children
  }, [list, children, updateStatus])

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
        {content}
      </Collapse>
    </div>
  )
}

export default memo(SupportItem)
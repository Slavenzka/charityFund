import { memo, useCallback, useMemo, useState } from 'react'
import css from './SupportCrypto.module.scss'
import SupportItem from 'components/organisms/SupportItem/SupportItem'
import { CryptoOptions, LanguageOptions } from 'utils/const'
import IconCopy from 'assets/icons/IconCopy'
import classnames from 'classnames'

function SupportCrypto ({
  list,
  lang
}: {
  list: {
    key: string,
    wallet: string,
    network?: string,
    qrCode: string,
    link?: string,
    linkLabel?: string,
    type: CryptoOptions
  }[],
  lang: LanguageOptions
}) {
  const [selection, updateSelection] = useState({
    [CryptoOptions.BTC]: false,
    [CryptoOptions.ERC20]: false
  })

  const handleUpdateSelection = useCallback((option, wallet) => {
    navigator.clipboard.writeText(wallet)
      .then(() => {
        updateSelection(prevState => {
          const state = {...prevState}

          Object.keys(state).forEach(key => {
            state[key] = key === option
          })

          return state
        })
      })

  }, [])

  const items = useMemo(() => list.map(({
    key,
    wallet,
    network,
    qrCode,
    link,
    linkLabel,
    type
  }, index) => (
    <SupportItem
      label={key}
      key={index}
    >
      <div className={css.crypto}>
          <span
            className={classnames(css.wallet, {
              [css.walletCopied]: selection[type]
            })}
          >
            <span
              className={classnames(css.label)}
            >
              {lang === LanguageOptions.UA
                ? `Адресу скопійовано`
                : `Wallet address was copied to clipboard`
              }
            </span>
            {wallet}
            <button
              onClick={() => handleUpdateSelection(type, wallet)}
              className={css.button}
              type="button"
            >
              Select wallet address to clipboard
              <IconCopy className={css.icon} />
            </button>
          </span>
        <img
          src={qrCode}
          className={css.qr}
          alt={key}
        />
        {network && (
          <span className={css.network}>
            {network}
          </span>
        )}
        {link && (
          <a
            href={link}
            className={css.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {linkLabel}
          </a>
        )}
      </div>
    </SupportItem>
  )), [list, selection, handleUpdateSelection, lang])

  return (
    <>
      {items}
    </>
  )
}

export default memo(SupportCrypto)
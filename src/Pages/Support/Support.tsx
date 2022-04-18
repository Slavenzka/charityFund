import { memo, useMemo, useState } from 'react'
import css from './Support.module.scss'
import { CryptoOptions, LanguageOptions } from 'utils/const'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import SupportItem from 'components/organisms/SupportItem/SupportItem'
import { SaveWaypointType } from 'components/organisms/controllers/WaypointsController/WaypointController.spec'
import { NavigationData } from 'components/organisms/Navigation/_assets/data'
import classnames from 'classnames'
import qrERC20 from 'assets/images/erc20qr.jpg'
import qrBTC from 'assets/images/btcQr.jpg'
import SupportCrypto from 'components/organisms/SupportCrypto/SupportCrypto'
import IconVisa from 'assets/icons/IconVisa'
import IconMastercard from 'assets/icons/IconMastercard'

function Support ({lang, saveWaypoint}: {lang: LanguageOptions} & SaveWaypointType) {
  const data = useMemo(() => ({
    heading: {
      [LanguageOptions.UA]: `Допомога`,
      [LanguageOptions.ENG]: `Support`,
    },
    description: {
      [LanguageOptions.UA]: `Реквізити для зарахування коштів`,
      [LanguageOptions.ENG]: `Account details for support`,
    },
    list: {
      [LanguageOptions.UA]: {
        column1: [
          {
            key: `Зарахування коштів у гривні`,
            value: [
              `Отримувач: БО "БФ "ГЕНЕРАЛА ЗАЛУЖНОГО"`,
              `Код ЄДРПОУ 44715019`,
              `Назва банку отримувача АТ "ПУМБ"`,
              `МФО банку отримувача 334851`,
              `Рахунок отримувача`,
              `IBAN UA553348510000000026003175486`,
              `Призначення платежу: Благодійна допомога`
            ]
          },
          {
            key: `Зарахування коштів у EUR`,
            value: [
              `Beneficiary: CO «CF «GENERAL ZALUZHNYI» `,
              `Beneficiary code 44715019`,
              `Beneficiary bank FIRST UKRAINIAN INTERNATIONAL BANK  4, Andriivska Str., Kyiv, 04070, Ukraine`,
              `IBAN UA553348510000000026003175486`,
              `SWIFT BIC:  FUIBUA2X`,
              `Bank correspondent Raiffeisen Bank International AG Am Stadtpark, 9, A-1030, Vienna, Austria`,
              `SWIFT CHASUS33`,
              `Detail of payment: Charitable help`
            ]
          },
        ],
        column2: [
          {
            key: `Зарахування коштів в USD`,
            value: [
              `Beneficiary: CO «CF «GENERAL ZALUZHNYI»`,
              `Beneficiary code 44715019`,
              `Beneficiary bank FIRST UKRAINIAN INTERNATIONAL BANK  4, Andriivska Str., Kyiv, 04070, Ukraine`,
              `IBAN UA553348510000000026003175486`,
              `SWIFT BIC:  FUIBUA2X`,
              `Bank correspondent JPMorgan Chase Bank N.A. 270 Park Avenue, NY 10017, New York`,
              `SWIFT CHASUS33`,
              `Detail of payment: Charitable help`,
            ]
          },
          {
            key: `Зарахування коштів у GBP`,
            value: [
              `Beneficiary: CO «CF «GENERAL ZALUZHNYI»`,
              `Beneficiary code 44715019`,
              `Beneficiary bank FIRST UKRAINIAN INTERNATIONAL BANK  4, Andriivska Str., Kyiv, 04070, Ukraine`,
              `IBAN UA553348510000000026003175486`,
              `SWIFT BIC:  FUIBUA2X`,
              `Bank correspondent Raiffeisen Bank International AG Am Stadtpark, 9, A-1030, Vienna, Austria`,
              `SWIFT CHASUS33`,
              `Detail of payment: Charitable help`,
            ]
          },
        ],
      },
      [LanguageOptions.ENG]: {
        column1: [
          {
            key: `Transfers in UAH`,
            value: [
              `Отримувач: БО "БФ "ГЕНЕРАЛА ЗАЛУЖНОГО"`,
              `Код ЄДРПОУ 44715019`,
              `Назва банку отримувача АТ "ПУМБ"`,
              `МФО банку отримувача 334851`,
              `Рахунок отримувача`,
              `IBAN UA553348510000000026003175486`,
              `Призначення платежу: Благодійна допомога`
            ]
          },
          {
            key: `Transfers in EUR`,
            value: [
              `Beneficiary: CO «CF «GENERAL ZALUZHNYI» `,
              `Beneficiary code 44715019`,
              `Beneficiary bank FIRST UKRAINIAN INTERNATIONAL BANK  4, Andriivska Str., Kyiv, 04070, Ukraine`,
              `IBAN UA553348510000000026003175486`,
              `SWIFT BIC:  FUIBUA2X`,
              `Bank correspondent Raiffeisen Bank International AG Am Stadtpark, 9, A-1030, Vienna, Austria`,
              `SWIFT CHASUS33`,
              `Detail of payment: Charitable help`
            ]
          },
        ],
        column2: [
          {
            key: `Transfers in USD`,
            value: [
              `Beneficiary: CO «CF «GENERAL ZALUZHNYI»`,
              `Beneficiary code 44715019`,
              `Beneficiary bank FIRST UKRAINIAN INTERNATIONAL BANK  4, Andriivska Str., Kyiv, 04070, Ukraine`,
              `IBAN UA553348510000000026003175486`,
              `SWIFT BIC:  FUIBUA2X`,
              `Bank correspondent JPMorgan Chase Bank N.A. 270 Park Avenue, NY 10017, New York`,
              `SWIFT CHASUS33`,
              `Detail of payment: Charitable help`,
            ]
          },
          {
            key: `Transfers in GBP`,
            value: [
              `Beneficiary: CO «CF «GENERAL ZALUZHNYI»`,
              `Beneficiary code 44715019`,
              `Beneficiary bank FIRST UKRAINIAN INTERNATIONAL BANK  4, Andriivska Str., Kyiv, 04070, Ukraine`,
              `IBAN UA553348510000000026003175486`,
              `SWIFT BIC:  FUIBUA2X`,
              `Bank correspondent Raiffeisen Bank International AG Am Stadtpark, 9, A-1030, Vienna, Austria`,
              `SWIFT CHASUS33`,
              `Detail of payment: Charitable help`,
            ]
          },
        ],
      },
    },
    crypto: {
      [LanguageOptions.UA]: [
        {
          key: `Переказ коштів у ETH, USDT, USDC, DAI`,
          network: `Ether, BSC, Polygon networks`,
          qrCode: qrERC20,
          wallet: `0xa2Aa41204b3fe3413B0082A0C282Ba02B33183fe`,
          type: CryptoOptions.ERC20
        },
        {
          key: `Переказ коштів у BTC`,
          link: `https://link.trustwallet.com/send?asset=c0&address=bc1qhp08l7y6gjfpqujg7y65r5wu5xk2seurxczdlt`,
          linkLabel: `посилання на наш BTC Wallet`,
          qrCode: qrBTC,
          wallet: `bc1qhp08l7y6gjfpqujg7y65r5wu5xk2seurxczdlt`,
          type: CryptoOptions.BTC
        },
      ],
      [LanguageOptions.ENG]: [
        {
          key: `Transfers in ETH, USDT, USDC, DAI`,
          network: `Ether, BSC, Polygon networks`,
          qrCode: qrERC20,
          wallet: `0xa2Aa41204b3fe3413B0082A0C282Ba02B33183fe`,
          type: CryptoOptions.ERC20
        },
        {
          key: `Transfers BTC`,
          link: `https://link.trustwallet.com/send?asset=c0&address=bc1qhp08l7y6gjfpqujg7y65r5wu5xk2seurxczdlt`,
          linkLabel: `Our BTC Wallet link`,
          qrCode: qrBTC,
          wallet: `bc1qhp08l7y6gjfpqujg7y65r5wu5xk2seurxczdlt`,
          type: CryptoOptions.BTC
        },
      ],
    }
  }), [])

  const TabTypes = {
    BANK: `BANK`,
    CRYPTO: `CRYPTO`,
    CARD: `CARD`
  }

  const [tab, setTab] = useState(TabTypes.CARD)

  const leftColumn = useMemo(() => {
    return data.list[lang].column1.map(({key, value}, index) => (
      <SupportItem
        label={key}
        list={value}
        className={css.item}
        key={index}
      />
    ))
  }, [data, lang])

  const rightColumn = useMemo(() => {
    return data.list[lang].column2.map(({key, value}, index) => (
      <SupportItem
        label={key}
        list={value}
        className={css.item}
        key={index}
      />
    ))
  }, [data, lang])

  const content = useMemo(() => {
    if (tab === TabTypes.BANK) {
      return (
        <>
          <div>
            {leftColumn}
          </div>
          <div>
            {rightColumn}
          </div>
        </>
      )
    }

    if (tab === TabTypes.CARD) {
      return (
        <a
          href="https://payhub.com.ua/#/payment/zaluzhnoho"
          className={css.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {lang === LanguageOptions.UA
            ? `Підтримайте нас`
            : `Support us`
          }
          <IconVisa className={css.iconCard} />
          <IconMastercard className={css.iconCard} />
        </a>
      )
    }

    return (
      <SupportCrypto
        list={data.crypto[lang]}
        lang={lang}
      />
    )
  }, [data, tab, leftColumn, rightColumn, TabTypes, lang])

  return (
    <section
      className={css.wrapper}
      id={NavigationData.SUPPORT.id}
      ref={saveWaypoint}
    >
      <Heading
        headingStyle={HeadingTypes.H3}
      >
        {data.heading[lang]}
      </Heading>
      <Heading
        className={css.subheading}
        headingStyle={HeadingTypes.H4}
        headingType={HeadingTypes.H3}
      >
        {data.description[lang]}
      </Heading>
      <ul className={css.tabs}>
        <button
          onClick={() => setTab(TabTypes.CARD)}
          className={classnames(css.tab, {
            [css.tabActive]: tab === TabTypes.CARD
          })}
          type="button"
        >
          Visa / Mastercard
        </button>
        <button
          onClick={() => setTab(TabTypes.BANK)}
          className={classnames(css.tab, {
            [css.tabActive]: tab === TabTypes.BANK
          })}
          type="button"
        >
          {lang === LanguageOptions.UA
            ? `Банківський переказ`
            : `Bank transfer`
          }
        </button>
        <button
          onClick={() => setTab(TabTypes.CRYPTO)}
          className={classnames(css.tab, {
            [css.tabActive]: tab === TabTypes.CRYPTO
          })}
          type="button"
        >
          {lang === LanguageOptions.UA
            ? `Переказ у криптовалюті`
            : `Crypto currency transfer`
          }
        </button>
      </ul>
      <div className={css.content}>
        {content}
      </div>
    </section>
  )
}

export default memo(Support)
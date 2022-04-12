import { memo, useMemo } from 'react'
import css from './Support.module.scss'
import { LanguageOptions } from 'utils/const'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import SupportItem from 'components/organisms/SupportItem/SupportItem'

function Support ({lang}: {lang: LanguageOptions}) {
  const data = {
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
              `Рахунок отримувача IBAN`,
              `UA5533485100000000026003175486`,
              `Призначення платежу: Благодійна допомога`
            ]
          },
          {
            key: `Зарахування коштів у EUR`,
            value: [
              `Beneficiary: CO «CF «GENERAL ZALUZHNYI» `,
              `Beneficiary code 44715019`,
              `Beneficiary bank FIRST UKRAINIAN INTERNATIONAL BANK  4, Andriivska Str., Kyiv, 04070, Ukraine`,
              `IBAN UA5533485100000000026003175486`,
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
              `IBAN UA5533485100000000026003175486`,
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
              `IBAN UA5533485100000000026003175486`,
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
              `Рахунок отримувача IBAN`,
              `UA5533485100000000026003175486`,
              `Призначення платежу: Благодійна допомога`
            ]
          },
          {
            key: `Transfers in EUR`,
            value: [
              `Beneficiary: CO «CF «GENERAL ZALUZHNYI» `,
              `Beneficiary code 44715019`,
              `Beneficiary bank FIRST UKRAINIAN INTERNATIONAL BANK  4, Andriivska Str., Kyiv, 04070, Ukraine`,
              `IBAN UA5533485100000000026003175486`,
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
              `IBAN UA5533485100000000026003175486`,
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
              `IBAN UA5533485100000000026003175486`,
              `SWIFT BIC:  FUIBUA2X`,
              `Bank correspondent Raiffeisen Bank International AG Am Stadtpark, 9, A-1030, Vienna, Austria`,
              `SWIFT CHASUS33`,
              `Detail of payment: Charitable help`,
            ]
          },
        ],
      },
    },
  }

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

  return (
    <section className={css.wrapper}>
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
      <div className={css.content}>
        <div>
          {leftColumn}
        </div>
        <div>
          {rightColumn}
        </div>
      </div>
    </section>
  )
}

export default memo(Support)
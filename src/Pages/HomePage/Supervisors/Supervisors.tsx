import { memo, useMemo } from 'react'
import css from './Supervisors.module.scss'
import { LanguageOptions } from 'utils/const'
import Zaluzhny from 'assets/images/Zaluzhny.jpg'
import Moisuk from 'assets/images/Moisuk.jpg'
import Shaptala from 'assets/images/Shaptala.jpg'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import SupervisorItem from 'components/molecules/SupervisorItem/SupervisorItem'

function Supervisors ({lang}: {lang: LanguageOptions}) {
  const data = {
    heading: {
      [LanguageOptions.UA]: `Наглядова рада`,
      [LanguageOptions.ENG]: `Supervisory board`,
    },
    list: {
      [LanguageOptions.UA]: [
        {
          name: `ЗАЛУЖНИЙ<br/>Валерій Федорович`,
          rank: `голова Наглядової ради, Головнокомандувач Збройних Сил України`,
          photo: Zaluzhny
        },
        {
          name: `МОЙСЮК<br/>Євген Георгійович`,
          rank: `член Наглядової ради, заступник Головнокомандувача Збройних Сил України`,
          photo: Moisuk
        },
        {
          name: `ШАПТАЛА<br/>Сергій Олександрович`,
          rank: `член Наглядової ради, начальник Генерального штабу Збройних Сил України`,
          photo: Shaptala
        },
      ],
      [LanguageOptions.ENG]: [
        {
          name: `ZALUZHNY<br/>Valery Fedorovich`,
          rank: `Chairman of the Supervisory Board, Commander-in-Chief of the Armed Forces of Ukraine`,
          photo: Zaluzhny
        },
        {
          name: `MOYSYUK<br/>Yevhen Heorhiyovych`,
          rank: `Member of the Supervisory Board, Deputy Commander-in-Chief of the Armed Forces of Ukraine`,
          photo: Moisuk
        },
        {
          name: `SHAPTALA<br/>Sergey Alexandrovich`,
          rank: `Member of the Supervisory Board, Chief of the General Staff of the Armed Forces of Ukraine`,
          photo: Shaptala
        },
      ],
    },
  }

  const items = useMemo(() => {
    return data.list[lang].map((item, index) => (
      <SupervisorItem
        key={index}
        {...item}
      />
    ))
  }, [data, lang])

  return (
    <section className={css.wrapper}>
      <Heading headingStyle={HeadingTypes.H3}>
        {data.heading[lang]}
      </Heading>
      <ul className={css.list}>
        {items}
      </ul>
    </section>
  )
}

export default memo(Supervisors)
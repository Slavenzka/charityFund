import { memo, useMemo } from 'react'
import css from 'Pages/HomePage/Goals/Goals.module.scss'
import { LanguageOptions } from 'utils/const'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import GoalItem from 'components/molecules/GoalItem/GoalItem'

function Goals ({lang}: {lang: LanguageOptions}) {
  const data = {
    heading: {
      [LanguageOptions.UA]: `Цілі фонду`,
      [LanguageOptions.ENG]: `Fund goals`,
    },
    list: {
      [LanguageOptions.UA]: [
        `Побудова ефективної комунікації між Генеральним штабом Збройних Сил України та&nbsp;волонтерами для забезпечення актуальних потреб ЗСУ.`,
        `Спрощення логістики забезпечення підрозділів Збройних Сил України.`,
        `Залучення додаткових ресурсів для потреб Збройних Сил України.`,
      ],
      [LanguageOptions.ENG]: [
        `Building effective communication between the General Staff of&nbsp;the Armed Forces of&nbsp;Ukraine and volunteers to&nbsp;meet the current needs of&nbsp;the Armed Forces.`,
        `Optimisation of&nbsp;logistics for units of&nbsp;the Armed Forces of&nbsp;Ukraine.`,
        `Attracting additional resources for the needs of&nbsp;the Armed Forces of&nbsp;Ukraine.`
      ],
    }
  }

  const goals = useMemo(() => {
    return data.list[lang].map((label, index) => (
      <GoalItem
        label={label}
        index={index + 1}
        key={index}
      />
    ))
  }, [lang, data])

  return (
    <section className={css.wrapper}>
      <Heading headingStyle={HeadingTypes.H3}>
        {data.heading[lang]}
      </Heading>
      <ul className={css.list}>
        {goals}
      </ul>
    </section>
  )
}

export default memo(Goals)
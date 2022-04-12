import { memo } from 'react'
import css from 'Pages/HomePage/Mission/Mission.module.scss'
import classnames from 'classnames'
import { LanguageOptions } from 'utils/const'
import Heading from 'components/atoms/Heading/Heading'
import missionBg from 'assets/images/mission.jpg'
import IconArrow from 'assets/icons/IconArrow'

function Mission ({lang}: {lang: LanguageOptions}) {
  const data = {
    heading: {
      [LanguageOptions.UA]: `Місія Фонду`,
      [LanguageOptions.ENG]: `Fund mission`,
    },
    description: {
      [LanguageOptions.UA]: `Благодійний фонд генерала Залужного cтворений для координації дій українських та&nbsp;міжнародних волонтерів для максимально ефективного використання ресурсів згідно з&nbsp;актуальними короткостроковими та&nbsp;довгостроковими задачами Збройних Сил України.`,
      [LanguageOptions.ENG]: `The General Zaluzhny Charitable Foundation was established to&nbsp;coordinate the actions of&nbsp;Ukrainian and international volunteers for the most efficient use of&nbsp;resources in&nbsp;accordance with the current short-term and long-term objectives of&nbsp;the Armed Forces of&nbsp;Ukraine.`,
    },
    link: {
      [LanguageOptions.UA]: `Підтримай Збройні Сили України`,
      [LanguageOptions.ENG]: `Support Armed Forces of Ukraine`,
    }
  }

  return (
    <section className={css.wrapper}>
      <Heading className={css.heading}>
        {data.heading[lang]}
      </Heading>
      <p
        className={css.description}
        dangerouslySetInnerHTML={{ __html: data.description[lang] }}
      />
      <div
        className={css.frame}
        style={{
          backgroundImage: `url("${missionBg}")`
        }}
      >
        <a
          href="#"
          className={css.link}
        >
          {data.link[lang]}
          <IconArrow className={css.icon} />
        </a>
      </div>
    </section>
  )
}

export default memo(Mission)
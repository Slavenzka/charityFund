import { memo } from 'react'
import css from 'Pages/HomePage/Mission/Mission.module.scss'
import { LanguageOptions } from 'utils/const'
import Heading from 'components/atoms/Heading/Heading'
import IconArrow from 'assets/icons/IconArrow'
import {
  SaveWaypointType,
} from 'components/organisms/controllers/WaypointsController/WaypointController.spec'
import { NavigationData } from 'components/organisms/Navigation/_assets/data'
import videoBanner from 'assets/videos/demo.mp4'

function Mission ({
  lang,
  saveWaypoint,
  onClick
}: {
  lang: LanguageOptions,
  onClick: () => void
} & SaveWaypointType) {
  const data = {
    heading: {
      [LanguageOptions.UA]: `Місія Фонду`,
      [LanguageOptions.ENG]: `Fund mission`,
    },
    description: {
      [LanguageOptions.UA]: `Благодійний фонд "Ми переможемо" cтворений з метою координації дій українських та&nbsp;міжнародних волонтерів для максимально ефективного використання ресурсів згідно з&nbsp;актуальними короткостроковими та&nbsp;довгостроковими задачами Збройних Сил України`,
      [LanguageOptions.ENG]: `"We will win" Charitable Foundation was established to&nbsp;coordinate the actions of&nbsp;Ukrainian and international volunteers for the most efficient use of&nbsp;resources in&nbsp;accordance with the current short-term and long-term objectives of&nbsp;the Armed Forces of&nbsp;Ukraine`,
    },
    link: {
      [LanguageOptions.UA]: `Підтримай Збройні Сили України`,
      [LanguageOptions.ENG]: `Support Armed Forces of Ukraine`,
    }
  }

  return (
    <section
      className={css.wrapper}
      id={NavigationData.ABOUT.id}
      ref={saveWaypoint}
    >
      <Heading className={css.heading}>
        {data.heading[lang]}
      </Heading>
      <p
        className={css.description}
        dangerouslySetInnerHTML={{ __html: data.description[lang] }}
      />
      <div
        className={css.frame}
      >
        <video
          className={css.video}
          autoPlay
          muted={true}
          playsInline
          loop
        >
          <source src={videoBanner} />
        </video>
        <button
          onClick={onClick}
          className={css.link}
          type="button"
        >
          {data.link[lang]}
          <IconArrow className={css.icon} />
        </button>
      </div>
    </section>
  )
}

export default memo(Mission)
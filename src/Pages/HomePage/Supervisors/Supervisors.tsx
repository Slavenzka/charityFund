import { memo, useMemo } from 'react'
import css from './Supervisors.module.scss'
import { LanguageOptions } from 'utils/const'
import Zaluzhny from 'assets/images/Zaluzhny.jpg'
import Moisuk from 'assets/images/Moisuk.jpg'
import Shaptala from 'assets/images/Shaptala.jpg'
import Gorbatuk from 'assets/images/Gorbatuk.jpg'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import SupervisorItem from 'components/molecules/SupervisorItem/SupervisorItem'
import { SaveWaypointType } from 'components/organisms/controllers/WaypointsController/WaypointController.spec'
import { NavigationData } from 'components/organisms/Navigation/_assets/data'

function Supervisors ({lang, saveWaypoint}: {lang: LanguageOptions} & SaveWaypointType) {
  const data = useMemo(() => ({
    heading: {
      [LanguageOptions.UA]: `Наглядова рада`,
      [LanguageOptions.ENG]: `Supervisory board`,
    },
    list: {
      [LanguageOptions.UA]: [
        {
          name: `ЗАЛУЖНИЙ<br/>Валерій Федорович`,
          rank: `голова Наглядової ради,<br/>Головнокомандувач Збройних Сил України`,
          photo: Zaluzhny
        },
        {
          name: `МОЙСЮК<br/>Євген Георгійович`,
          rank: `член Наглядової ради,<br/>заступник Головнокомандувача Збройних Сил України`,
          photo: Moisuk
        },
        {
          name: `ШАПТАЛА<br/>Сергій Олександрович`,
          rank: `член Наглядової ради,<br/>начальник Генерального штабу Збройних Сил України`,
          photo: Shaptala
        },
        {
          name: `ГОРБАТЮК<br/>Людмила Володимирівна`,
          rank: `генеральний директор МБ-МЕДІА, провідного музичного телевізійного каналу для молодої активної аудиторії Music Box UA`,
          photo: Gorbatuk
        },
      ],
      [LanguageOptions.ENG]: [
        {
          name: `ZALUZHNYI<br/>Valerii Fedorovych`,
          rank: `Chairman of the Supervisory Board,<br/>Commander-in-Chief of the Armed Forces of Ukraine`,
          photo: Zaluzhny
        },
        {
          name: `MOISIUK<br/>Yevhen Heorhiiovych`,
          rank: `Member of the Supervisory Board,<br/>Deputy Commander-in-Chief of the Armed Forces of Ukraine`,
          photo: Moisuk
        },
        {
          name: `SHAPTALA<br/>Serhii Oleksandrovych`,
          rank: `Member of the Supervisory Board,<br/>Chief of the General Staff of the Armed Forces of Ukraine`,
          photo: Shaptala
        },
        {
          name: `HORBATYUK<br/>Lyudmyla Volodymyrivna`,
          rank: `general manager of MB-MEDIA, music tv-channel for young and active audience of Music Box UA`,
          photo: Gorbatuk
        },
      ],
    },
  }), [])

  const items = useMemo(() => {
    return data.list[lang].map((item, index) => (
      <SupervisorItem
        className={css.item}
        key={index}
        {...item}
      />
    ))
  }, [data, lang])

  return (
    <section
      className={css.wrapper}
      id={NavigationData.SUPERVISORS.id}
      ref={saveWaypoint}
    >
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
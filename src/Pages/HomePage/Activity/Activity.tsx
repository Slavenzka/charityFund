import { memo, useMemo } from 'react'
import css from './Activity.module.scss'
import { LanguageOptions } from 'utils/const'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import ActivityItem from 'components/atoms/ActivityItem/ActivityItem'

function Activity ({lang}: {lang: LanguageOptions}) {
  const data = {
    heading: {
      [LanguageOptions.UA]: `Напрямки діяльності`,
      [LanguageOptions.ENG]: `Fields of concern`,
    },
    list: {
      [LanguageOptions.UA]: [
        `Допомога Збройним Силам України в&nbsp;придбанні військового обладнання, спорядження.`,
        `Допомога Збройним Силам України в&nbsp;придбанні медичних препаратів, розвитку польових госпіталів, польової хірургії.`,
        `Допомога в&nbsp;лікуванні поранених воїнів.`,
        `Допомога сім&rsquo;ям загиблих воїнів.`,
        `Допомога у&nbsp;фізичній і&nbsp;психологічній реабілітації військовослужбовців.`,
      ],
      [LanguageOptions.ENG]: [
        `Assistance to&nbsp;the Armed Forces of&nbsp;Ukraine in&nbsp;the purchase of&nbsp;military equipment.`,
        `Assistance to&nbsp;the Armed Forces of&nbsp;Ukraine in&nbsp;the purchase of&nbsp;medicines, installation of&nbsp;field hospitals, performing field surgery.`,
        `Assistance in&nbsp;the treatment of&nbsp;wounded soldiers.`,
        `Helping the families of&nbsp;the fallen soldiers.`,
        `Assistance in&nbsp;physical and psychological rehabilitation of&nbsp;servicemen.`,
      ],
    },
    description: {
      [LanguageOptions.UA]: `Ми&nbsp;робимо все можливе, а&nbsp;іноді і&nbsp;неможливе, щоб наші воїни, які боронять Україну, були забезпечені найновітнішим озброєнням, засобами захисту та&nbsp;спорядженням. Володіючи оперативною інформацією щодо нагальних потреб військових, ми&nbsp;можемо точніше і&nbsp;оперативніше їх&nbsp;задовольнити.`,
      [LanguageOptions.ENG]: `We&nbsp;do&nbsp;everything possible, and sometimes impossible, to&nbsp;ensure that our soldiers defending Ukraine are provided with the latest weapons, means of&nbsp;protection and equipment. With up-to-date information on&nbsp;the urgent needs of&nbsp;the military, we&nbsp;can meet them more accurately and quickly.`
    }
  }

  const activities = useMemo(() => {
    return data.list[lang].map((label, index) => (
      <ActivityItem
        label={label}
        key={index}
      />
    ))
  }, [data, lang])

  return (
    <section className={css.wrapper}>
      <Heading headingStyle={HeadingTypes.H3}>
        {data.heading[lang]}
      </Heading>
      <ul className={css.list}>
        {activities}
      </ul>
      <p className={css.description} dangerouslySetInnerHTML={{__html: data.description[lang]}} />
    </section>
  )
}

export default memo(Activity)
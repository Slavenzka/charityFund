import { memo } from 'react'
import css from './Contacts.module.scss'
import { LanguageOptions } from 'utils/const'
import Container from 'components/templates/Container/Container'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import { SaveWaypointType } from 'components/organisms/controllers/WaypointsController/WaypointController.spec'
import { NavigationData } from 'components/organisms/Navigation/_assets/data'
import Social from 'components/molecules/Social/Social'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { DeviceTypes } from 'specs/enum.spec'
import ContainerAdaptive from 'components/templates/Container/ContainerAdaptive'

function Contacts ({lang, saveWaypoint}: {lang: LanguageOptions} & SaveWaypointType) {
  const data = {
    heading: {
      [LanguageOptions.UA]: `Контакти`,
      [LanguageOptions.ENG]: `Contacts`,
    },
    contacts: {
      [LanguageOptions.UA]: {
        address: `Україна, 03035, м. Київ, вул.&nbsp;Митрополита Василя Липківського, буд.&nbsp;45, офіс 304`,
        phone: `+380 99 683 98 01`,
        site: `www.general.fund`
      },
      [LanguageOptions.ENG]: {
        address: `Ukraine, 03035,  Kyiv, Mytropolyta Vasylia Lypkivskoho Street, 45, office#304`,
        phone: `+380 99 683 98 01`,
        site: `www.general.fund`
      },
    },
    social: {
      instagram: `https://instagram.com`,
      facebook: `https://facebook.com`,
      twitter: `https://twitter.com`
    }
  }

  const deviceType = useSelector((store: RootReducerType) => store.elastic.deviceType)
  const isAdaptive = deviceType === DeviceTypes.ADAPTIVE
  const ContainerComponent = isAdaptive
    ? ContainerAdaptive
    : Container

  return (
    <section
      className={css.wrapper}
      id={NavigationData.CONTACTS.id}
      ref={saveWaypoint}
    >
      <ContainerComponent className={css.container}>
        <Heading
          className={css.heading}
          headingStyle={HeadingTypes.H3}
        >
          {data.heading[lang]}
        </Heading>
        <div className={css.contacts}>
          <span className={css.address} dangerouslySetInnerHTML={{__html: data.contacts[lang].address}} />
          <a href={`tel:${data.contacts[lang].phone.split(` `).join(``)}`} className={css.link}>
            {data.contacts[lang].phone}
          </a>
          <a
            href={`https://${data.contacts[lang].site}`}
            className={css.link}
            rel="noreferrer noopener"
            target="_blank"
          >
            {data.contacts[lang].site}
          </a>
          <Social className={css.social} />
        </div>
      </ContainerComponent>
    </section>
  )
}

export default memo(Contacts)
import { memo } from 'react'
import css from './Contacts.module.scss'
import { LanguageOptions } from 'utils/const'
import Container from 'components/templates/Container/Container'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'components/atoms/Heading/Heading.spec'
import SocialItem from 'components/atoms/SocialItem/SocialItem'
import IconInstagram from 'assets/icons/IconInstagram'
import IconFacebook from 'assets/icons/IconFacebook'
import IconTwitter from 'assets/icons/IconTwitter'

function Contacts ({lang}: {lang: LanguageOptions}) {
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

  return (
    <section className={css.wrapper}>
      <Container className={css.container}>
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
          <ul className={css.list}>
            <li className={css.item}>
              <SocialItem
                url={data.social.instagram}
                Icon={IconInstagram}
                label="Follow us in Instagram"
              />
            </li>
            <li className={css.item}>
              <SocialItem
                url={data.social.facebook}
                Icon={IconFacebook}
                label="Follow us in Facebook"
              />
            </li>
            <li className={css.item}>
              <SocialItem
                url={data.social.twitter}
                Icon={IconTwitter}
                label="Follow us in Twitter"
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default memo(Contacts)
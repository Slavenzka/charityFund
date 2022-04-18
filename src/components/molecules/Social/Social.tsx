import { memo } from 'react'
import css from './Social.module.scss'
import classnames from 'classnames'
import SocialItem from 'components/atoms/SocialItem/SocialItem'
import IconFacebook from 'assets/icons/IconFacebook'
import { PropsWithClassName } from 'specs/index.spec'
import IconTelegram from 'assets/icons/IconTelegram'

function Social ({
  className,
  isDark
}: {
  isDark?: boolean
} & PropsWithClassName) {
  const data = {
    facebook: `https://www.facebook.com/CinCAFU`,
    telegram: `http://t.me/CinCAFU`
  }

  return (
    <ul className={classnames(css.list, className)}>
      {/*{data?.instagram && (*/}
      {/*  <li className={css.item}>*/}
      {/*    <SocialItem*/}
      {/*      url={data.instagram}*/}
      {/*      Icon={IconInstagram}*/}
      {/*      label="Follow us in Instagram"*/}
      {/*      isDark={isDark}*/}
      {/*    />*/}
      {/*  </li>*/}
      {/*)}*/}
      <li className={css.item}>
        <SocialItem
          url={data.facebook}
          Icon={IconFacebook}
          label="Follow us in Facebook"
          isDark={isDark}
        />
      </li>
      <li className={css.item}>
        <SocialItem
          url={data.telegram}
          Icon={IconTelegram}
          label="Follow us in Telegram"
          isDark={isDark}
        />
      </li>
    </ul>
  )
}

export default memo(Social)
import { memo } from 'react'
import css from './Footer.module.scss'
import Container from 'components/templates/Container/Container'
import logoLight from 'assets/images/logo_light.png'
import Navigation from 'components/organisms/Navigation/Navigation'
import ButtonLang from 'components/organisms/ButtonLang/ButtonLang'

function Footer () {
  return (
    <footer className={css.wrapper}>
      <Container className={css.container}>
        <img
          src={logoLight}
          className={css.logo}
          alt="Благодійний фонд генерала Залужного"
        />
        <Navigation
          className={css.navigation}
          isLight
        />
        <ButtonLang
          className={css.button}
          isLight
        />
      </Container>
    </footer>
  )
}

export default memo(Footer)
import { memo } from 'react'
import css from './Footer.module.scss'
import Container from 'components/templates/Container/Container'
import Navigation from 'components/organisms/Navigation/Navigation'
import ButtonLang from 'components/organisms/ButtonLang/ButtonLang'
import IconEvoltech from 'assets/icons/IconEvoltech'
import IconLogo from 'assets/icons/IconLogo'

function Footer () {
  return (
    <footer className={css.wrapper}>
      <Container className={css.container}>
        <IconLogo className={css.logo} />
        <Navigation
          className={css.navigation}
          isLight
        />
        <ButtonLang
          className={css.button}
          isLight
        />
        <a
          className={css.link}
          href="https://www.evol.tech/"
          target="_blank"
          rel="noreferrer noopener"
          title="Design and development by EvolTech"
        >
          <IconEvoltech className={css.iconDev} />
          EvolTech - web and mobile apps developer
        </a>
      </Container>
    </footer>
  )
}

export default memo(Footer)
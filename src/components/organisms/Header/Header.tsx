import { FC, memo } from 'react'
import css from 'components/organisms/Header/Header.module.scss'
import Container from 'components/templates/Container/Container'
import { HeaderProps } from 'components/organisms/Header/Header.spec'
import classnames from 'classnames'
import Navigation from 'components/organisms/Navigation/Navigation'
import ButtonLang from 'components/organisms/ButtonLang/ButtonLang'
import ButtonSupport from 'components/organisms/ButtonSupport/ButtonSupport'
import IconLogo from 'assets/icons/IconLogo'

const Header: FC<HeaderProps> = ({
  className,
  headerRef,
}) => {
  return (
    <header
      className={classnames(css.header, className)}
      ref={headerRef}
    >
      <Container className={css.container}>
        <IconLogo className={css.logo} />
        <nav>
          <Navigation />
        </nav>
        <ButtonLang className={css.buttonLang} />
        <ButtonSupport className={css.buttonSupport} />
      </Container>
    </header>
  )
}

export default memo(Header)
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import css from './HeaderAdaptive.module.scss'
import logo from 'assets/images/logo.png'
import ContainerAdaptive from 'components/templates/Container/ContainerAdaptive'
import ButtonSupportAdaptive from 'components/organisms/ButtonSupport/ButtonSupportAdaptive'
import IconBurger from 'assets/icons/IconBurger'
import IconClose from 'assets/icons/IconClose'
import classnames from 'classnames'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import ButtonLang from 'components/organisms/ButtonLang/ButtonLang'
import NavigationAdaptive from 'components/organisms/Navigation/NavigationAdaptive'
import Social from 'components/molecules/Social/Social'

function HeaderAdaptive ({
  onNavClick
}: {
  onNavClick: (id?: string) => void
}) {
  const [isOpen, toggleOpenStatus] = useState<boolean | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)

  const handleClickBurger = useCallback(() => {
    toggleOpenStatus(prevState => !prevState)
  }, [])

  useEffect(() => {
    if (isOpen && headerRef.current) {
      disableBodyScroll(headerRef.current)
    }

    if (!isOpen && headerRef.current) {
      enableBodyScroll(headerRef.current)
    }
  }, [isOpen])

  const handleClickNavItem = useCallback((id?: string) => {
    onNavClick && onNavClick(id)

    if (headerRef.current) {
      enableBodyScroll(headerRef.current as HTMLElement)
      toggleOpenStatus(false)
    }
  }, [onNavClick])

  return (
    <header
      className={css.header}
      ref={headerRef}
    >
      <ContainerAdaptive className={css.container}>
        <button
          onClick={handleClickBurger}
          className={css.button}
          type="button"
        >
          {!isOpen
            ? <IconBurger className={css.iconBurger} />
            : <IconClose className={css.iconClose} />
          }
        </button>
        <img
          src={logo}
          className={css.logo}
          alt="Благодійний фонд генерала Залужного"
        />
        <ButtonSupportAdaptive
          className={css.buttonSupport}
        />
      </ContainerAdaptive>
      <div
        className={classnames(css.menu, {
          [css.menuOpen]: typeof isOpen === 'boolean' && isOpen,
          [css.menuClose]: typeof isOpen === 'boolean' && !isOpen,
        })}
      >
        <ContainerAdaptive>
          <ButtonLang />
          <nav>
            <NavigationAdaptive
              className={css.navigation}
              onClick={handleClickNavItem}
            />
          </nav>
          <Social isDark />
        </ContainerAdaptive>
      </div>
    </header>
  )
}

export default memo(HeaderAdaptive)
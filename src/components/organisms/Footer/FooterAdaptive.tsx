import { memo } from 'react'
import css from './FooterAdaptive.module.scss'
import ContainerAdaptive from 'components/templates/Container/ContainerAdaptive'
import NavigationAdaptive from 'components/organisms/Navigation/NavigationAdaptive'
import IconEvoltech from 'assets/icons/IconEvoltech'
import IconLogo from 'assets/icons/IconLogo'

function FooterAdaptive ({
  onNavClick
}: {
  onNavClick: (id?: string) => void
}) {
  return (
    <footer className={css.wrapper}>
      <ContainerAdaptive className={css.container}>
        <NavigationAdaptive
          onClick={onNavClick}
          className={css.navigation}
          isMinified
          isLight
        />
        <IconLogo className={css.logo} />
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
      </ContainerAdaptive>
    </footer>
  )
}

export default memo(FooterAdaptive)
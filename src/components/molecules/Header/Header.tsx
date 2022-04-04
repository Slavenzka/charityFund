import { FC, memo, useMemo } from 'react'
import css from './Header.module.scss'
import Container from 'components/templates/Container/Container'
import { RoutesDescription } from 'Pages/Routes'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import { HeaderProps } from 'components/molecules/Header/Header.spec'

const Header: FC<HeaderProps> = ({className, headerRef}) => {
  const {
    pathname
  }: {
    pathname: string
  } = useLocation()
  
  const items: JSX.Element[] = useMemo(() => {
    return RoutesDescription
      .filter(item => item.label)
      .map(({label, path}, index) => (
        <li
          className={css.item}
          key={index}
        >
          <Link
            to={path}
            className={classnames({
              [css.linkDisabled]: pathname === path
            })}
          >
            { label }
          </Link>
        </li>
      ))
  }, [pathname])
  
  
  return (
    <header className={className} ref={headerRef}>
      <Container className={css.container}>
        <nav>
          <ul className={css.list}>
            { items }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default memo(Header)
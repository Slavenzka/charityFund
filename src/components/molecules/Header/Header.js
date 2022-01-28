import { memo, useMemo } from 'react'
import css from './Header.module.scss'
import Container from 'components/templates/Container/Container'
import { RoutesDescription } from 'Pages/Routes'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

function Header ({className, headerRef}) {
  const location = useLocation()
  
  const items = useMemo(() => {
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
              [css.linkDisabled]: location.pathname === path
            })}
          >
            { label }
          </Link>
        </li>
      ))
  }, [location])
  
  
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
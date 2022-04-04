import { memo, PropsWithChildren } from 'react'
import { HOME_PAGE } from 'Pages/Routes'
import { Link, useLocation } from 'react-router-dom'
import { LogoProviderProps } from 'components/organisms/LogoProvider/LogoProvider.spec'

function LogoProvider ({
  baseUrl = HOME_PAGE,
  children,
  ...props
}: PropsWithChildren<LogoProviderProps>) {
  const location = useLocation()
  const isRenderedAsLink = location.pathname !== baseUrl
  
  if (isRenderedAsLink) {
    return (
      <Link
        to={baseUrl}
        {...props}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <>
      {children}
    </>
  )
}

export default memo(LogoProvider)
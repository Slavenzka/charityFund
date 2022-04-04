import DesktopApp from 'App/DesktopApp'
import AdaptiveApp from 'App/AdaptiveApp'
import { DeviceTypes } from 'utils/const'
import useElasticAdaptive from 'hooks/useElasticAdaptive'

const ViewSwitcher = ({
  isDesktopOnly
}: {
  isDesktopOnly?: boolean
}) => {
  const { type } = useElasticAdaptive()

  return isDesktopOnly || type === DeviceTypes.DESKTOP
    ? <DesktopApp />
    : <AdaptiveApp />
}

export default ViewSwitcher

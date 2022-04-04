import { isBrowser, isMobileOnly, isTablet } from 'react-device-detect'
import { setDeviceType, setFontSize } from 'store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { debounce } from 'utils'
import { RootReducerType } from 'store/spec/index.spec'
import { DeviceTypes } from 'specs/enum.spec'

function useElasticAdaptive () {
  const state = useSelector((state: RootReducerType) => state.elastic.config)
  const type = useSelector((state: RootReducerType) => state.elastic.deviceType)
  const dispatch = useDispatch()
  
  useEffect(() => {
    getDeviceType()
    type && changeSize()
    window.addEventListener('resize', debounce(changeSize))
    window.addEventListener('orientationchange', debounce(changeSize))
    
    return () => {
      window.removeEventListener('resize', debounce(changeSize))
      window.removeEventListener('orientationchange', debounce(changeSize))
    }
  })
  
  const getDeviceType = () => {
    if (isBrowser) {
      dispatch(setDeviceType(DeviceTypes.DESKTOP))
    }
    
    if (isTablet || isMobileOnly) {
      dispatch(setDeviceType(DeviceTypes.ADAPTIVE))
    }
  }
  
  const changeSize = () => {
    const width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
    getDeviceType()
    if (type) {
      const html = document.documentElement
      const {widthLimit, baseWidth} = state[type]
      const {baseSize} = state[type]
      let actualWidth = width
      
      if (widthLimit) {
        actualWidth = Math.min(width, widthLimit)
      }
      
      const currentSize = actualWidth / (baseWidth as number) * baseSize
      dispatch(setFontSize(currentSize))
      html.style.fontSize = currentSize + 'px'
    }
  }
  
  return {
    type
  }
}

export default useElasticAdaptive
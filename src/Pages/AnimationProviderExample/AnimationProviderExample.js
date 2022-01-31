import { memo, useCallback, useState } from 'react'
import css from './AnimationProviderExample.module.scss'
import classnames from 'classnames'
import VisibilityAnimationProvider from 'components/organisms/VisibilityAnimationProvider/VisibilityAnimationProvider'

function AnimationProviderExample () {
  const [isVisible, toggleVisibility] = useState(false)
  
  const handleClickButton = useCallback(() => {
    toggleVisibility(prevState => !prevState)
  }, [])
  
  return (
    <section>
      <button
        onClick={handleClickButton}
        type="button"
      >
        Toggle element
      </button>
      <VisibilityAnimationProvider
        isVisible={isVisible}
        classNameVisible={css.itemVisible}
        classNameHidden={css.itemHidden}
        options={{
          displayType: `flex`
        }}
      >
        {({animationClassName, getTargetRef, ...props}) => (
          <div
            className={classnames(css.item, animationClassName)}
            ref={getTargetRef}
            {...props}
          >
            {isVisible
              ? `Is visible`
              : `Is hidden`
            }
          </div>
        )}
      </VisibilityAnimationProvider>
    </section>
  )
}

export default memo(AnimationProviderExample)
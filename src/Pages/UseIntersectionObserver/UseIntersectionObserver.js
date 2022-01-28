import { memo, useState } from 'react'
import css from './UseIntersectionObserver.module.scss'
import Container from 'components/templates/Container/Container'
import Heading from 'components/atoms/Heading/Heading'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import classnames from 'classnames'

function UseIntersectionObserver () {
  const [ref, setRef] = useState(null)
  
  const isVisible = useIntersectionObserver({
    element: ref,
    margins: `-5% 0% -5% 0%`
  })
  
  return (
    <section>
      <Container>
        <Heading style={{margin: `1.5rem 0`}}>
          useIntersectionObserver hook with AnimationProvider
        </Heading>
        <div style={{height: `300vh`}}>
          <div
            className={classnames(css.target, {
              [css.targetVisible]: isVisible,
              [css.targetHidden]: !isVisible
            })}
            ref={node => {
              setRef(node)
            }}
          >
            {isVisible ? `I am visible` : `I am hidden`}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default memo(UseIntersectionObserver)
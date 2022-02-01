import { memo, useCallback, useState } from 'react'
import css from './ButtonFilterSingleValue.module.scss'
import Button from 'components/atoms/Button/Button'
import classnames from 'classnames'

function ButtonFilterSingleValue ({
  filterSingleValue,
  children,
  value,
  field
}) {
  const [isClicked, setClickedStatus] = useState(false)
  
  const handleClickButton = useCallback(() => {
    if (isClicked) {
      filterSingleValue()
    }
    
  }, [isClicked, filterSingleValue, value, field])
  
  return (
    <Button
      className={classnames(css.button, {
        [css.buttonClicked]: isClicked
      })}
    >
      {children}
    </Button>
  )
}

export default memo(ButtonFilterSingleValue)
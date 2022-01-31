import { memo } from 'react'
import css from './ClickOutsideDemo.module.scss'
import SelectCustom from 'components/molecules/SelectCustom/SelectCustom'
import useClickOutside from 'hooks/useClickOutside'

function ClickOutsideDemo () {
  const {
    setTargetRef
  } = useClickOutside({
    handleClickOutside: () => alert(`Clicked outside`)
  })
  
  return (
    <section>
      <div className={css.wrapper}>
        <div className={css.target} ref={setTargetRef}>
          <SelectCustom
            options={[
              {
                label: `1`,
                value: 1
              },
              {
                label: `2`,
                value: 2
              },
              {
                label: `3`,
                value: 3
              },
              {label: `4`,
                value: 4
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default memo(ClickOutsideDemo)
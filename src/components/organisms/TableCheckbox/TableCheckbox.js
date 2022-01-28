import { memo } from 'react'
import Input, { InputVariants } from 'components/atoms/Input/Input'

function TableCheckbox ({
  data,
  isToggleAll,
  property = `id`,
  rowData,
  tableSelection,
  handleClick
}) {
  const isChecked = isToggleAll
    ? tableSelection.length === data.length
    : tableSelection.some(id => id === rowData?.[property])
  
  
  return (
    <Input
      checked={isChecked}
      onChange={() => handleClick({
        property,
        isToggleAll,
        rowData
      })}
      type="checkbox"
      variant={InputVariants.CHECKBOX_DEFAULT}
    />
  )
}

export default memo(TableCheckbox)
import { FC, memo } from 'react'
import Input from 'components/atoms/Input/Input'
import { InputVariants } from 'components/atoms/Input/Input.spec'
import { TableCheckboxProps } from 'components/atoms/TableCheckbox/TableCheckbox.spec'

const TableCheckbox: FC<TableCheckboxProps> = ({
  dataLength,
  isToggleAll,
  property = `id`,
  rowData,
  tableSelection,
  handleClick
}) => {
  const isChecked = isToggleAll
    ? tableSelection.length === dataLength
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
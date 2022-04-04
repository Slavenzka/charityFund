import { useCallback, useEffect, useState } from 'react'
import {
  filterHelpers,
} from 'utils/filterHelpers'
import { TableRowItemDataType } from 'components/molecules/Table/Table.spec'
import { FilterConfigItemType } from 'hooks/filtration/useFilterSingleValue'

export type MultiValueFilterConfigType = {
  label: string;
  field: string;
}[]

export interface MultiValueFilterType {
  [key: string]: FilterConfigItemType
}

export interface UpdateMultiFilterType {
  ({
     addedValueItem,
     field
   }: {
    addedValueItem: string,
    field: string
  }): void
}

interface ApplyFilterType<DataType> {
  (data: DataType[]): DataType[]
}

interface ResultObject<DataType> {
  multiValueFilter: MultiValueFilterType | null;
  resetMultiValueFilter: (() => void) | null;
  updateMultiValueFilter: UpdateMultiFilterType;
  applyMultiValueFilter: ApplyFilterType<DataType>
}

interface FilterArgumentsType<DataType> {
  data: DataType[];
  multiValueFilterConfig: MultiValueFilterConfigType;
}

function useFilterMultiValue <DataType extends TableRowItemDataType>({
  data,
  multiValueFilterConfig
}: FilterArgumentsType<DataType>): ResultObject<DataType> {
  const [multiValueFilter, setMultiValueFilter] = useState<MultiValueFilterType | null>(null)

  const {
    multiValueFilter: {
      getUpdatedFilterState,
      checkItemFiltration
    }
  } = filterHelpers
  
  useEffect(() => {
    if (!multiValueFilterConfig) return
    
    if (!multiValueFilter) {
      const filter: MultiValueFilterType = multiValueFilterConfig.reduce((total, {field, label}) => {
        const uniqueFieldValues = new Set(data.map(({[field]: fieldValue}) => fieldValue))
        total[field] = {
          value: null,
          query: [...uniqueFieldValues],
          label
        }
        return total
      }, {})
      
      setMultiValueFilter(filter)
    }
  }, [data, multiValueFilterConfig, multiValueFilter])
  
  const resetMultiValueFilter: () => void = useCallback(() => {
    setMultiValueFilter((prevState: MultiValueFilterType | null) => {
      if (prevState) {
        return Object.entries(prevState)
          .reduce((total, [field, item]) => {
            total[field] = {
              ...item,
              value: null
            }
            return total
          }, {})
      }

      return prevState
    })
  }, [])
  
  const updateMultiValueFilter: UpdateMultiFilterType = useCallback(({addedValueItem, field}) => {
    setMultiValueFilter(prevState => {
      const updatedField = prevState?.[field]
      const updatedValue = updatedField?.value
      const isAnyValueExists = Array.isArray(updatedValue) && updatedValue.length > 0
      
      if (!isAnyValueExists) return getUpdatedFilterState({
        state: prevState,
        field,
        updatedData: {
          ...updatedField,
          value: [addedValueItem]
        }
      })
      
      const updatedValueIndex = updatedValue.findIndex(item => item === addedValueItem)
      const isAddedValueAlreadyExists = updatedValueIndex >= 0
      
      if (!isAddedValueAlreadyExists) return getUpdatedFilterState({
        state: prevState,
        field,
        updatedData: {
          ...updatedField,
          value: [...updatedValue, addedValueItem]
        }
      })
      
      if (isAddedValueAlreadyExists) return getUpdatedFilterState({
        state: prevState,
        field,
        updatedData: {
          ...updatedField,
          value: [
            ...updatedValue.slice(0, updatedValueIndex),
            ...updatedValue.slice(updatedValueIndex + 1)
          ]
        }
      })
      
      return prevState
    })
  }, [getUpdatedFilterState])
  
  const applyMultiValueFilter: ApplyFilterType<DataType> = useCallback(data => {
    if (!multiValueFilter) return data
    
    return data.filter(item => checkItemFiltration({dataItem: item, filter: multiValueFilter}))
  }, [multiValueFilter, checkItemFiltration])
  
  return {
    multiValueFilter,
    resetMultiValueFilter: multiValueFilter
      ? resetMultiValueFilter
      : null,
    updateMultiValueFilter,
    applyMultiValueFilter
  }
}

export default useFilterMultiValue
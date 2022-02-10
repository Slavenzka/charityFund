import { useCallback, useEffect, useState } from 'react'
import {
  filterHelpers,
} from 'utils/filterHelpers'

function useFilterMultiValue ({data, multiValueFilterConfig}) {
  const [multiValueFilter, setMultiValueFilter] = useState(null)
  
  const {
    multiValueFilter: {
      getUpdatedFilterState,
      checkItemFiltration
    }
  } = filterHelpers
  
  useEffect(() => {
    if (!multiValueFilterConfig) return null
    console.log(multiValueFilterConfig)
    
    if (!multiValueFilter) {
      const filter = multiValueFilterConfig.reduce((total, {field, label}) => {
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
  
  const resetMultiValueFilter = useCallback(() => {
    setMultiValueFilter(prevState => {
      return Object.entries(prevState)
        .reduce((total, [field, item]) => {
          total[field] = {
            ...item,
            value: null
          }
          return total
        }, {})
    })
  }, [])
  
  const updateMultiValueFilter = useCallback(({addedValueItem, field}) => {
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
  
  const applyMultiValueFilter = useCallback(data => {
    if (!multiValueFilter) return data
    
    return data.filter(item => checkItemFiltration({dataItem: item, filter: multiValueFilter}))
  }, [multiValueFilter, checkItemFiltration])
  
  return {
    multiValueFilter,
    resetMultiValueFilter: multiValueFilter ? resetMultiValueFilter : null,
    updateMultiValueFilter,
    applyMultiValueFilter
  }
}

export default useFilterMultiValue
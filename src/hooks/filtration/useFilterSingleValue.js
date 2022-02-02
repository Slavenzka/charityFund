import { useCallback, useState } from 'react'
import {
  filterHelpers
} from 'utils/filterHelpers'

function useFilterSingleValue ({
  singleValueFilterConfig
}) {
  const [singleValueFilter, setSingleValueFilter] = useState(singleValueFilterConfig)
  const {
    singleValueFilter: {
      checkFilterEmpty,
      resetFieldValues,
      checkItemFiltration,
      checkValuesMatchQuery
    }
  } = filterHelpers
  
  const resetSingleValueFilter = useCallback(() => {
    setSingleValueFilter(prevState => {
      return Object.entries(prevState).reduce((total, [field, queries]) => {
        total[field] = resetFieldValues(queries)
        return total
      }, {})
    })
  }, [resetFieldValues])
  
  const updateSingleValueFilter = useCallback(({field, value}) => {
    setSingleValueFilter(prevState => {
      const prevField = prevState?.[field] ?? []
      const updatedIndex = prevField.findIndex(({query}) => Array.isArray(value)
        ? checkValuesMatchQuery({query, value})
        : query.includes(value)
      )
      const prevQuery = prevField[updatedIndex]
      const updatedQuery = {
        ...prevQuery,
        value,
      }
      const updatedField = [
        ...resetFieldValues(prevField.slice(0, updatedIndex)),
        updatedQuery,
        ...resetFieldValues(prevField.slice(updatedIndex + 1))
      ]
      
      return {
        ...prevState,
        [field]: updatedField
      }
    })
  }, [resetFieldValues, checkValuesMatchQuery])
  
  const applySingleValueFilter = useCallback(data => {
    const isFilterEmpty = checkFilterEmpty(singleValueFilter)
  
    if (isFilterEmpty) {
      return data
    } else {
      return data.filter(item => checkItemFiltration({
        item,
        filter: singleValueFilter
      }))
    }
  }, [singleValueFilter, checkFilterEmpty, checkItemFiltration])
  
  return {
    singleValueFilter,
    resetSingleValueFilter,
    updateSingleValueFilter,
    applySingleValueFilter
  }
}

export default useFilterSingleValue
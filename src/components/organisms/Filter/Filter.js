import { memo, useCallback, useEffect, useState } from 'react'

function Filter ({
  children,
  config = {},
  data,
}) {
  const {
    singleValueFilterConfig = {}
  } = config
  
  const [singleValueFilter, updateSingleValueFilter] = useState(singleValueFilterConfig)
  const [filteredData, setFilteredData] = useState(null)
  
  const resetQueryStatus = useCallback(query => query.map(item => ({
    ...item,
    isApplied: false
  })), [])
  
  const resetFilter = useCallback(() => {
    updateSingleValueFilter(prevState => {
      return Object.entries(prevState).reduce((total, [field, queries]) => {
        total[field] = resetQueryStatus(queries)
        return total
      }, {})
    })
  }, [resetQueryStatus])
  
  // Returns "is none filter is selected" flag
  const checkFilterEmpty = useCallback(filter => {
    return Object.values(filter).reduce((isEmpty, queries) => {
      const isFieldEmpty = !queries.some(query => query.isApplied)
      isEmpty = isEmpty && isFieldEmpty
      return isEmpty
    }, true)
  }, [])
  
  const handleFilterSingleValue = useCallback(({field, value}) => {
    updateSingleValueFilter(prevState => {
      const prevField = prevState?.[field] ?? []
      const updatedIndex = prevField.findIndex(({query}) => Array.isArray(value)
        ? query === value
        : query.includes(value)
      )
      const prevQuery = prevField[updatedIndex]
      const updatedQuery = {
        ...prevQuery,
        isApplied: !prevQuery?.isApplied
      }
      const updatedField = [
        ...resetQueryStatus(prevField.slice(0, updatedIndex)),
        updatedQuery,
        ...resetQueryStatus(prevField.slice(updatedIndex + 1))
      ]
      
      return {
        ...prevState,
        [field]: updatedField
      }
    })
  }, [resetQueryStatus])
  
  const checkValidQueriesOnDataItem = useCallback(item => {
    const appliedFilters = Object.entries(singleValueFilter).reduce((total, [field, queries]) => {
      queries.forEach(({isApplied, ...query}) => {
        if (isApplied) {
          total.push({
            field,
            ...query
          })
        }
      })
      return total
    }, [])
  
    return appliedFilters.reduce((isValid, {field, query}) => {
      const isMatchingQuery = query.includes(item[field])
      isValid = isValid && isMatchingQuery
      
      return isValid
    }, true)
  }, [singleValueFilter])
  
  useEffect(() => {
    const isFilterEmpty = checkFilterEmpty(singleValueFilter)
  
    if (isFilterEmpty) {
      setFilteredData(data)
    } else {
      const filteredData = data.filter(checkValidQueriesOnDataItem)
      setFilteredData(filteredData)
    }
  }, [singleValueFilter, data, checkFilterEmpty, checkValidQueriesOnDataItem])
  
  return children({
    checkFilterEmpty,
    filteredData,
    singleValueFilter,
    handleFilterSingleValue,
    resetFilter
  })
}

export default memo(Filter)
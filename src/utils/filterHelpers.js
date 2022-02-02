export function areAllValuesInsideQuery ({query, value}) {
  if (!Array.isArray(query) || !Array.isArray(value) || value.length === 0) return false
  
  const unequalItems = value.filter(item => !query.includes(item))
  return unequalItems.length === 0
}

export const filterHelpers = {
  singleValueFilter: {
    checkFilterEmpty: function (filter) {
      return Object.values(filter).reduce((isEmpty, queries) => {
        const isFieldEmpty = !queries.some(query => query.value)
        isEmpty = isEmpty && isFieldEmpty
        return isEmpty
      }, true)
    },
    resetFieldValues: function (fieldStatus) {
      return fieldStatus.map(item => ({
        ...item,
        value: null
      }))
    },
    checkItemFiltration: function ({item, filter}) {
      // 1st - get all active filters
      const appliedFilters = Object.entries(filter).reduce((total, [field, queries]) => {
        queries.forEach(({value, ...query}) => {
          if (value) {
            total.push({
              field,
              value,
              ...query
            })
          }
        })
        return total
      }, [])
  
      // 2nd - filter data with data structure received on step 1
      return appliedFilters.reduce((isValid, {field, query}) => {
        const isMatchingQuery = query.includes(item[field])
        isValid = isValid && isMatchingQuery
    
        return isValid
      }, true)
    },
    checkValuesMatchQuery: function ({query, value}) {
      if (!Array.isArray(query) || !Array.isArray(value) || value.length === 0) return false
  
      const unequalItems = value.filter(item => !query.includes(item))
      return unequalItems.length === 0
    }
  },
  dateRangeFilter: {
    checkItemFiltration: function ({item, filter}) {
      const {
        field,
        from,
        to
      } = filter
  
      const isFieldExists = item?.[field]
      
      if (!isFieldExists) return false
  
      if (from && !to) return item[field] >= from
  
      if (!from && to) return item[field] <= to
  
      if (from && to) return item[field] >= from && item[field] <= to
  
      return true
    }
  },
  multiValueFilter: {
    getUpdatedFilterState: function ({state, field, updatedData}) {
      return {
        ...state,
        [field]: updatedData
      }
    },
    checkItemFiltration: function ({dataItem, filter}) {
      return Object.entries(filter).reduce((isPassed, [field, {value}]) => {
        if (isPassed) {
          const isEmptyValues = !value || (Array.isArray(value) && value.length === 0)
          isPassed = isEmptyValues || value.includes(dataItem[field])
        }
        return isPassed
      }, true)
    }
  }
}
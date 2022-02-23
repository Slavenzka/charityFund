import { useCallback, useState } from 'react'
import { filterHelpers } from 'utils/filterHelpers'

function useDateRangeFilter ({
  dateRangeFilterConfig
}) {
  const [dateRangeFilter, setDateRangeFilter] = useState(dateRangeFilterConfig)
  
  const {isSingleDate} = dateRangeFilter ?? {}
  
  const {
    dateRangeFilter: {
      checkDateFiltration,
      checkRangeFiltration
    }
  } = filterHelpers
  
  const resetDateRangeFilter = useCallback(() => {
    setDateRangeFilter(prevState => {
      if (isSingleDate) {
        return {
          ...prevState,
          date: null
        }
      }
      
      return {
        ...prevState,
        from: null,
        to: null
      }
    })
  }, [isSingleDate])
  
  const updateDateRangeFilter = useCallback(value => {
    if (isSingleDate) {
      return setDateRangeFilter(prevState => ({
        ...prevState,
        date: value
      }))
    }
    
    const {from, to} = value
    
    setDateRangeFilter(prevState => ({
      ...prevState,
      from,
      to
    }))
  }, [isSingleDate])
  
  const applyDateRangeFilter = useCallback(data => {
    if (!dateRangeFilter) return null
    
    if (isSingleDate) {
      return data.filter(item => checkDateFiltration({
        item,
        filter: dateRangeFilter
      }))
    }
    
    return data.filter(item => checkRangeFiltration({
      item,
      filter: dateRangeFilter
    }))
  }, [dateRangeFilter, checkRangeFiltration, checkDateFiltration, isSingleDate])
  
  return {
    dateRangeFilter,
    resetDateRangeFilter: dateRangeFilter ? resetDateRangeFilter : null,
    updateDateRangeFilter,
    applyDateRangeFilter
  }
}

export default useDateRangeFilter
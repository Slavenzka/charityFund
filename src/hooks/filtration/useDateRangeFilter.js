import { useCallback, useState } from 'react'
import { filterHelpers } from 'utils/filterHelpers'

function useDateRangeFilter ({
  dateRangeFilterConfig
}) {
  const [dateRangeFilter, setDateRangeFilter] = useState(dateRangeFilterConfig)
  const {
    dateRangeFilter: {
      checkItemFiltration
    }
  } = filterHelpers
  
  const resetDateRangeFilter = useCallback(() => {
    setDateRangeFilter(prevState => ({
      ...prevState,
      from: null,
      to: null
    }))
  }, [])
  
  const updateDateRangeFilter = useCallback(({from, to}) => {
    setDateRangeFilter(prevState => ({
      ...prevState,
      from,
      to
    }))
  }, [])
  
  const applyDateRangeFilter = useCallback(data => {
    if (!dateRangeFilter) return null
    
    return data.filter(item => checkItemFiltration({
      item,
      filter: dateRangeFilter
    }))
  }, [dateRangeFilter, checkItemFiltration])
  
  return {
    dateRangeFilter,
    resetDateRangeFilter: dateRangeFilter ? resetDateRangeFilter : null,
    updateDateRangeFilter,
    applyDateRangeFilter
  }
}

export default useDateRangeFilter
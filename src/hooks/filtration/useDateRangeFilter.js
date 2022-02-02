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
    return data.filter(item => checkItemFiltration({
      item,
      filter: dateRangeFilter
    }))
  }, [dateRangeFilter, checkItemFiltration])
  
  return {
    dateRangeFilter,
    resetDateRangeFilter,
    updateDateRangeFilter,
    applyDateRangeFilter
  }
}

export default useDateRangeFilter
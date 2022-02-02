import { memo, useEffect, useRef, useState } from 'react'
import useFilterSingleValue from 'hooks/filtration/useFilterSingleValue'
import useDateRangeFilter from 'hooks/filtration/useDateRangeFilter'
import useFilterMultiValue from 'hooks/filtration/useFilterMultiValue'

function Filter ({
  children,
  config = {},
  data,
}) {
  const {
    singleValueFilterConfig = {},
    dateRangeFilterConfig = {},
    multiValueFilterConfig = {}
  } = config
  
  const [filteredData, setFilteredData] = useState(data)
  const isFiltering = useRef(false)
  
  const {
    singleValueFilter,
    resetSingleValueFilter,
    updateSingleValueFilter,
    applySingleValueFilter
  } = useFilterSingleValue({
    singleValueFilterConfig
  })
  
  const {
    dateRangeFilter,
    resetDateRangeFilter,
    updateDateRangeFilter,
    applyDateRangeFilter
  } = useDateRangeFilter({
    dateRangeFilterConfig,
  })
  
  const {
    multiValueFilter,
    resetMultiValueFilter,
    updateMultiValueFilter,
    applyMultiValueFilter
  } = useFilterMultiValue({
    data,
    multiValueFilterConfig
  })
  
  const resetFilter = () => {
    resetSingleValueFilter && resetSingleValueFilter()
    resetDateRangeFilter && resetDateRangeFilter()
    resetMultiValueFilter && resetMultiValueFilter()
  }
  
  useEffect(() => {
    if (!isFiltering.current) {
      isFiltering.current = true
      new Promise(resolve => {
        resolve(applySingleValueFilter(data))
      })
        .then(singleValueFilteredData => {
          return applyDateRangeFilter(singleValueFilteredData)
        })
        .then(dateRangeFilteredData => {
          const filteredData = applyMultiValueFilter(dateRangeFilteredData)
          setFilteredData(filteredData)
        })
        .then(() => {
          isFiltering.current = false
        })
    }
  }, [
    data,
    singleValueFilter,
    dateRangeFilter,
    applySingleValueFilter,
    applyDateRangeFilter,
    applyMultiValueFilter
  ])
  
  return children({
    filteredData,
    singleValueFilter,
    updateSingleValueFilter,
    dateRangeFilter,
    updateDateRangeFilter,
    multiValueFilter,
    updateMultiValueFilter,
    resetFilter
  })
}

export default memo(Filter)
import { memo, useEffect, useRef, useState } from 'react'
import useFilterSingleValue, { FilterConfigType } from 'hooks/filtration/useFilterSingleValue'
import useDateRangeFilter from 'hooks/filtration/useDateRangeFilter'
import useFilterMultiValue from 'hooks/filtration/useFilterMultiValue'
import { FilterProps } from 'components/organisms/Filter/Filter.spec'
import { TableRowItemDataType } from 'components/molecules/Table/Table.spec'

function Filter<DataType extends TableRowItemDataType, SingleConfigType extends FilterConfigType> ({
  children,
  config,
  data,
}: FilterProps<DataType, SingleConfigType>) {
  const {
    singleValueFilterConfig,
    dateRangeFilterConfig,
    multiValueFilterConfig
  } = config
  
  const [filteredData, setFilteredData] = useState(data)
  const isFiltering = useRef(false)
  
  const {
    singleValueFilter,
    resetSingleValueFilter,
    updateSingleValueFilter,
    applySingleValueFilter
  } = useFilterSingleValue<DataType, SingleConfigType>({
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
  } = useFilterMultiValue<DataType>({
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
      new Promise<DataType[]>(resolve => {
        if (!singleValueFilter) resolve(data)
        
        resolve(applySingleValueFilter(data))
      })
        .then<DataType[]>(singleValueFilteredData => {
          if (!dateRangeFilter) return singleValueFilteredData
          
          return applyDateRangeFilter(singleValueFilteredData) as DataType[]
        })
        .then<void>(dateRangeFilteredData => {
          const filteredData: DataType[] = multiValueFilter
            ? applyMultiValueFilter(dateRangeFilteredData) as DataType[]
            : dateRangeFilteredData
  
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
    multiValueFilter,
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
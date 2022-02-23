import { memo, useEffect, useRef, useState } from 'react'
import useFilterSingleValue from 'hooks/filtration/useFilterSingleValue'
import useDateRangeFilter from 'hooks/filtration/useDateRangeFilter'
import useFilterMultiValue from 'hooks/filtration/useFilterMultiValue'
import PropTypes from 'prop-types'

function Filter ({
  children,
  config = {},
  data,
}) {
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
        if (!singleValueFilter) resolve(data)
        
        resolve(applySingleValueFilter(data))
      })
        .then(singleValueFilteredData => {
          if (!dateRangeFilter) return singleValueFilteredData
          
          return applyDateRangeFilter(singleValueFilteredData)
        })
        .then(dateRangeFilteredData => {
          const filteredData = multiValueFilter
            ? applyMultiValueFilter(dateRangeFilteredData)
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

Filter.propTypes = {
  /**
  * An object that describes current status of field filter
  * @typedef {Object} singleValueFilterItem
  * @property {string} label - label text for the filter trigger button
  * @property {Array<string>} query - array of valid values for the filtered field
  * @property {Array<string>} value - array of selected values to be used for filtering
  */
  
  /**
  * An object, that contains filter status for every required field with field name as keys and config arrays as values
  * @typedef {Object} singleValueFilter
  * @property {Array<singleValueFilterItem>} fieldName - data processed by all filter components
  */
  
  /**
  * @typedef {function} updateSingleValueFilter
  * @param {{field: string, value: Array<string>}} - and object that contains field name to update and actual new values to filter
  */
  
  /**
  * An object, that contains filter status
  * @typedef {Object} dateRangeFilter
  * @property {string} field - name of field of an object inside data array to be used for filtering
  * @property {number} from - timestamp of start point of time interval
  * @property {number} to - timestamp of end point of time interval
  */
  
  /**
  * @typedef {function} updateDateRangeFilter
  * @param {{from: number, to: number}} - updated start and end points for date range filter
  */
  
  /**
  * An object, that contains filter status
  * @typedef {Object} multiValueFilterItem
  * @property {Array<string>} value - array of selected values
  * @property {Array<string>} query - array of all possible values based on received data
  * @property {string} label - text label to name the filtering group
  */
  
  /**
  * An object, that contains filter status
  * @typedef {Object} multiValueFilter
  * @property {multiValueFilterItem} field - an object defining the filtering status for every field
  */
  
  /**
  * @typedef {function} updateMultiValueFilter
  * @param {{addedValueItem: string, field: string}}
  */
  
  /**
  * @typedef {Object} filterChildrenArgs
  * @property {Array} filteredData - data processed by all filter components
  * @property {singleValueFilter} singleValueFilter - actual state of single value filter
  * @property {updateSingleValueFilter} updateSingleValueFilter - function to update single value filter state
  * @property {dateRangeFilter} dateRangeFilter - actual state of date range filter
  * @property {updateDateRangeFilter} updateDateRangeFilter - function to update date range filter state
  * @property {multiValueFilter} multiValueFilter - actual state of multi value filter
  * @property {updateMultiValueFilter} updateMultiValueFilter - function to update multi value filter state
  * @property {function} resetFilter - filter reset function w/o arguments
  */
  /**
  * Render function for child components
  * @function renderFilterChildren
  * @param {filterChildrenArgs} - provides filtered data and filter logic
  */
  children: PropTypes.func,
  /*
  * Filter config object
  */
  config: PropTypes.shape({
    singleValueFilterConfig: PropTypes.shape({
      fieldName: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        query: PropTypes.arrayOf(PropTypes.string)
      }))
    }),
    multiValueFilterConfig: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      field: PropTypes.string
    })),
    dateRangeFilterConfig: PropTypes.shape({
      field: PropTypes.string,
      from: PropTypes.number,
      to: PropTypes.number
    })
  }),
  /*
  * Array of data to be processed by filter
  */
  data: PropTypes.array
}

export default memo(Filter)
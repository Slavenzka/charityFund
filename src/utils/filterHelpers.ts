import { getSimplifiedDateTimestamp } from 'utils/index'
import { FilterConfigItemType, FilterConfigType } from 'hooks/filtration/useFilterSingleValue'
import { TableRowItemDataType } from 'components/molecules/Table/Table.spec'
import { DateFilterConfigType } from 'hooks/filtration/useDateRangeFilter'
import { MultiValueFilterType } from 'hooks/filtration/useFilterMultiValue'

interface FilterHelpersType {
  singleValueFilter: {
    checkFilterEmpty: (filter: FilterConfigType) => boolean
    resetFieldValues: (fieldStatus: FilterConfigItemType[]) => FilterConfigItemType[];
    checkItemFiltration: <ConfigType>({
      item,
      filter
    }: {
      item: TableRowItemDataType,
      filter: ConfigType | FilterConfigType
    }) => boolean;
    checkValuesMatchQuery: ({query, value}: {query: string[], value: string[] | null}) => boolean;
  };
  dateRangeFilter: {
    checkRangeFiltration: <DataType>({
      item,
      filter
    }: {
      item: DataType,
      filter: DateFilterConfigType
    }) => boolean;
    checkDateFiltration: <DataType>({
      item,
      filter
    }: {
      item: DataType,
      filter: DateFilterConfigType
    }) => boolean;
  };
  multiValueFilter: {
    getUpdatedFilterState: ({
      state,
      field,
      updatedData
    }: {
      state: MultiValueFilterType | null,
      field: string,
      updatedData: Partial<FilterConfigItemType>
    }) => MultiValueFilterType;
    checkItemFiltration: ({
      dataItem,
      filter
    }: {
      dataItem: TableRowItemDataType,
      filter: MultiValueFilterType
    }) => boolean;
  };
}

export const filterHelpers: FilterHelpersType = {
  singleValueFilter: {
    checkFilterEmpty: function (filter) {
      return Object.values(filter).reduce((isEmpty, queries) => {
        const isFieldEmpty = !queries.some(query => query.value)
        isEmpty = isEmpty && isFieldEmpty
        return isEmpty
      }, true as boolean)
    },
    resetFieldValues: function (fieldStatus) {
      return fieldStatus.map(item => ({
        ...item,
        value: null
      }))
    },
    checkItemFiltration: function ({item, filter}) {
      interface ActiveFiltersType extends FilterConfigItemType {
        field: string;
      }
      // 1st - get all active filters
      const appliedFilters: ActiveFiltersType[] = Object.entries(filter).reduce((total, [field, queries]) => {
        console.log(queries)
        queries.forEach(({value, ...query}: FilterConfigItemType) => {
          if (value) {
            total.push({
              field,
              value,
              ...query
            })
          }
        })
        return total
      }, [] as ActiveFiltersType[])

      // 2nd - filter data with data structure received on step 1
      return appliedFilters.reduce((isValid, {field, query}) => {
        const isMatchingQuery = query.includes(item[field] as string)
        isValid = isValid && isMatchingQuery
    
        return isValid
      }, true as boolean)
    },
    checkValuesMatchQuery: function ({query, value}) {
      if (!Array.isArray(query) || !Array.isArray(value) || value.length === 0) return false
  
      const unequalItems = value.filter(item => !query.includes(item))
      return unequalItems.length === 0
    }
  },
  dateRangeFilter: {
    checkRangeFiltration: function ({item, filter}) {
      const {
        field,
        from,
        to
      } = filter
  
      const isFieldExists = item?.[field as string]
      
      if (!isFieldExists) return false
      const itemValue = getSimplifiedDateTimestamp(item[field as string])
  
      if (from && !to) return itemValue >= getSimplifiedDateTimestamp(from)
  
      if (!from && to) return itemValue <= getSimplifiedDateTimestamp(to)
  
      if (from && to) return itemValue >= getSimplifiedDateTimestamp(from) && itemValue <= getSimplifiedDateTimestamp(to)
  
      return true
    },
    checkDateFiltration: function ({item, filter}) {
      const {field, date} = filter
      
      if (!date) return true
      
      const filterTimestamp = getSimplifiedDateTimestamp(+new Date(date))
      const itemTimestamp = getSimplifiedDateTimestamp(+new Date(item[field as string]))
      
      return +filterTimestamp === +itemTimestamp
    },
  },
  multiValueFilter: {
    getUpdatedFilterState: function ({state, field, updatedData}) {
      return {
        ...state,
        [field]: updatedData
      } as MultiValueFilterType
    },
    checkItemFiltration: function ({dataItem, filter}) {
      return Object.entries(filter).reduce((isPassed, [field, {value}]) => {
        if (isPassed) {
          const isEmptyValues = !value || (Array.isArray(value) && value.length === 0)
          isPassed = isEmptyValues || value.includes(dataItem[field] as string)
        }
        return isPassed
      }, true as boolean)
    }
  }
}
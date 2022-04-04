import { useCallback, useState } from 'react'
import {
  filterHelpers
} from 'utils/filterHelpers'
import { TableRowItemDataType } from 'components/molecules/Table/Table.spec'

export interface FilterConfigItemType {
  /*
  * Label for filter button
  */
  label?: string;
  /*
  * List of all possible values that contribute to this filter category in case of any match
  */
  query: string[];
  /*
  * List of currently selected values
  */
  value: string[] | null;
}

export interface FilterConfigType {
  /*
  * Every property in config defines the status of the group of filters. For example, filtering by gender can contain
  * array items for filtering males and females:
  * gender: [
  *   {
  *     label: `Males`,
  *     query: [`Male`],
  *     value: [`Male`]
  *   },
  *   {
  *     label: `Females`,
  *     query: [`Female`],
  *     value: null
  *   },
  * ]
  */
  [key: string]: FilterConfigItemType[]
}

export interface updateFilterArgsType {
  ({
     field,
     value
   }: {
    field: string,
    value: string[]
  }): void;
}

interface applyFilterArgsType<DataType> {
  (data: DataType[]): DataType[]
}

interface ResultObjectType<DataType, ConfigType> {
  singleValueFilter: FilterConfigType | ConfigType;
  resetSingleValueFilter: (() => void) | null;
  updateSingleValueFilter: updateFilterArgsType;
  applySingleValueFilter: applyFilterArgsType<DataType>;
}

function useFilterSingleValue<DataType extends TableRowItemDataType, ConfigType extends FilterConfigType> ({
  singleValueFilterConfig
}: {
  singleValueFilterConfig: ConfigType | FilterConfigType
}): ResultObjectType<DataType, ConfigType> {
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
        return total as string
      }, {})
    })
  }, [resetFieldValues])
  
  const updateSingleValueFilter: updateFilterArgsType = useCallback(({field, value}) => {
    setSingleValueFilter(prevState => {
      const prevField = prevState?.[field] ?? []
      const updatedIndex = prevField.findIndex(({query}) => Array.isArray(value)
        ? checkValuesMatchQuery({query, value})
        : query.includes(value)
      )
      const isMatchFound = updatedIndex >= 0

      if (isMatchFound) {
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
      }

      return prevState
    })
  }, [resetFieldValues, checkValuesMatchQuery])
  
  const applySingleValueFilter: applyFilterArgsType<DataType> = useCallback(data => {
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
    resetSingleValueFilter: singleValueFilter
      ? resetSingleValueFilter
      : null,
    updateSingleValueFilter,
    applySingleValueFilter
  }
}

export default useFilterSingleValue
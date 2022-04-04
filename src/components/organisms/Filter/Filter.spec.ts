import { FilterConfigType, updateFilterArgsType } from 'hooks/filtration/useFilterSingleValue'
import {
  MultiValueFilterConfigType,
  MultiValueFilterType,
  UpdateMultiFilterType
} from 'hooks/filtration/useFilterMultiValue'
import { DateFilterConfigType, UpdateFilterType } from 'hooks/filtration/useDateRangeFilter'
import { TableRowItemDataType } from 'components/molecules/Table/Table.spec'

export interface FilterProps<DataType, SingleConfigType> {
  /*
  * Unfiltered data
  */
  data: DataType[] & TableRowItemDataType[];
  /*
  * Filter config object
  */
  config: {
    singleValueFilterConfig: FilterConfigType | SingleConfigType;
    multiValueFilterConfig: MultiValueFilterConfigType;
    dateRangeFilterConfig: DateFilterConfigType;
  };
  /*
  * Render function for child components that provides filtered data, current filter status and methods
  */
  children: ({
    filteredData,
    singleValueFilter,
    updateSingleValueFilter,
    dateRangeFilter
  }: {
    filteredData: DataType[],
    singleValueFilter: FilterConfigType | SingleConfigType,
    updateSingleValueFilter: updateFilterArgsType,
    dateRangeFilter: DateFilterConfigType,
    updateDateRangeFilter: UpdateFilterType,
    multiValueFilter: MultiValueFilterType | null,
    updateMultiValueFilter: UpdateMultiFilterType,
    resetFilter: (() => void) | null;
  }) => JSX.Element
}
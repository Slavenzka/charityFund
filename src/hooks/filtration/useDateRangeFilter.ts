import { useCallback, useState } from 'react'
import { filterHelpers } from 'utils/filterHelpers'

interface DateRangeType {
  from: number | null;
  to: number | null;
}

export interface DateFilterConfigType extends DateRangeType {
  field?: string;
  isSingleDate?: boolean;
  date?: number | null;
}

interface FilterProps {
  dateRangeFilterConfig: DateFilterConfigType
}

interface ResetFilterType {
  (): void;
}

export interface UpdateFilterType {
  (value: number | DateRangeType): void;
}

interface ApplyFilterType<DataType> {
  (data: DataType[]): DataType[] | null
}

interface ReturnObjectType<DataType> {
  dateRangeFilter: DateFilterConfigType;
  resetDateRangeFilter: ResetFilterType | null;
  updateDateRangeFilter: UpdateFilterType;
  applyDateRangeFilter: ApplyFilterType<DataType>
}

function useDateRangeFilter <DataType>({
  dateRangeFilterConfig
}: FilterProps): ReturnObjectType<DataType> {
  const [dateRangeFilter, setDateRangeFilter] = useState<DateFilterConfigType>(dateRangeFilterConfig)
  
  const {isSingleDate} = dateRangeFilter ?? {} as DateFilterConfigType
  
  const {
    dateRangeFilter: {
      checkDateFiltration,
      checkRangeFiltration
    }
  } = filterHelpers
  
  const resetDateRangeFilter: ResetFilterType = useCallback(() => {
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
  
  const updateDateRangeFilter: UpdateFilterType = useCallback(value => {
    if (isSingleDate) {
      setDateRangeFilter(prevState => ({
        ...prevState,
        date: value as number
      }))
      return
    }
    
    const {from, to} = value as DateRangeType
    
    setDateRangeFilter(prevState => ({
      ...prevState,
      from,
      to
    }))
  }, [isSingleDate])
  
  const applyDateRangeFilter: ApplyFilterType<DataType> = useCallback(data => {
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
    resetDateRangeFilter: dateRangeFilter
      ? resetDateRangeFilter
      : null,
    updateDateRangeFilter,
    applyDateRangeFilter
  }
}

export default useDateRangeFilter
import { MONTHS_SHORT } from 'utils/const'
import { SelectCustomOptionType } from 'components/molecules/SelectCustom/SelectCustom.spec'
import { FC } from 'react'

export const debounce = <FunctionType>(func: FunctionType, delay?: number) => {
  let isCoolDown = false
  
  return function () {
    if (isCoolDown) return null;
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    func.apply(this, arguments)
    
    isCoolDown = true
    
    setTimeout(() => {
      isCoolDown = false
    }, delay)
  }
}

export const covertFileToBase64: (file: File) => Promise<string> = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result as string)
  reader.onerror = error => reject(error)
})

export function convertFileAndProcessEncoding (file: File): Promise<string> {
  return covertFileToBase64(file)
    .then(base64code => {
      const query = `;base64,`
      return base64code.slice(base64code.indexOf(query) + query.length)
    })
}

export const generateTimeOptions: (range: number) => SelectCustomOptionType<number>[] = range => new Array(range)
  .fill(``)
  .map((_, index) => ({
    label: index,
    value: index
  }))

export function addZeroToSingleDigit (value: string | number): string | number {
  return !Number.isNaN(+value) && +value < 10
    ? `0${value}`
    : value
}

export function getFormattedDate (inputDate: number | Date, isTimeRequired?: boolean) {
  if (!inputDate) return ``
  
  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  
  if (!isTimeRequired) {
    return `${addZeroToSingleDigit(day)}-${MONTHS_SHORT[month]}-${year}`
  }
  
  const hours = date.getHours()
  const minutes = date.getMinutes()
  
  return `${addZeroToSingleDigit(day)}-${MONTHS_SHORT[month]}-${year} ${addZeroToSingleDigit(hours)}:${addZeroToSingleDigit(minutes)}`
}

export function getCalendarHighlightedDates ({
  from,
  to
}: {
  from?: number | Date,
  to?: number | Date
}) {
  if (!from || !to) return []
  
  const highlightFrom = new Date(from)
  const highlightTo = new Date(to)
  const highlightRange = [highlightFrom]
  
  while (+highlightRange[highlightRange.length - 1] < +highlightTo) {
    const lastAddedDate = highlightRange[highlightRange.length - 1]
    const nextDate = new Date(lastAddedDate)
    nextDate.setDate(nextDate.getDate() + 1)
    highlightRange.push(nextDate)
  }
  
  return highlightRange
}

export function getCalendarRangeValue ({
  from,
  to
}: {
  from?: number | Date,
  to?: number | Date
}) {
  if (from && !to) {
    const formattedFrom = getFormattedDate(from)
    
    return (
      `${formattedFrom} - N/A`
    )
  }
  
  if (!from && to) {
    const formattedTo = getFormattedDate(to)
    
    return (
      `N/A - ${formattedTo}`
    )
  }
  
  if (from && to) {
    const formattedFrom = getFormattedDate(from)
    const formattedTo = getFormattedDate(to)
    
    return (
      `${formattedFrom} - ${formattedTo}`
    )
  }
  
  return ``
}

export function getSimplifiedDateTimestamp (timestamp: number) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()
  
  return new Date(year, month, day)
}

let throttleTimer = false

// eslint-disable-next-line @typescript-eslint/ban-types
export const throttle = (callback: Function, time: number) => {
  if (throttleTimer) return
  
  throttleTimer = true
  
  setTimeout(() => {
    callback()
    throttleTimer = false;
  }, time)
}

export function emptyControllerWrapper ({render, ...props}: {render: FC}) {
  return render(props)
}
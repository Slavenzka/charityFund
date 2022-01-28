import { MONTHS_SHORT } from 'utils/const'

export const debounce = (func, delay) => {
  let isCoolDown = false
  
  return function () {
    if (isCoolDown) return null;
    
    func.apply(this, arguments)
    
    isCoolDown = true
    
    setTimeout(() => {
      isCoolDown = false
    }, delay)
  }
}

export const covertFileToBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

export function convertFileAndProcessEncoding (file) {
  return covertFileToBase64(file)
    .then(base64code => {
      const query = `;base64,`
      return base64code.slice(base64code.indexOf(query) + query.length)
    })
}

export const generateTimeOptions = range => new Array(range)
  .fill(``)
  .map((_, index) => ({
    label: index,
    value: index
  }))

export function addZeroToSingleDigit (value) {
  return !Number.isNaN(+value) && +value < 10
    ? `0${value}`
    : value
}

export function getFormattedDate (inputDate, isTimeRequired) {
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

export function getCalendarHighlightedDates ({from, to}) {
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

export function getCalendarRangeValue ({from, to}) {
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

let throttleTimer = false

export const throttle = (callback, time) => {
  if (throttleTimer) return
  
  throttleTimer = true
  
  setTimeout(() => {
    callback()
    throttleTimer = false;
  }, time)
}

export function emptyControllerWrapper ({render, ...props}) {
  return render(props)
}
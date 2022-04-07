export interface CalendarHeaderProps {
  areDropdownsRequired: boolean
  date: Date,
  decreaseMonth: () => void,
  increaseMonth: () => void,
  changeYear: (date: number) => void,
  changeMonth: (date: number) => void,
}
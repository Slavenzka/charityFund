export const DeviceTypes = {
  DESKTOP: 'DESKTOP',
  ADAPTIVE: 'ADAPTIVE'
}

export const FormElements = {
  INPUT: `INPUT`,
  INPUT_IMAGE: `INPUT_IMAGE`,
  INPUT_CHECKBOX: `INPUT_CHECKBOX`,
  DATEPICKER: `DATEPICKER`,
  DATE_RANGE_PICKER: `DATE_RANGE_PICKER`,
  SELECT: `SELECT`,
  TEXT_AREA_VARIABLE_HEIGHT: `TEXT_AREA_VARIABLE_HEIGHT`,
}

export enum LanguageOptions {
  UA = `UA`,
  ENG = `ENG`
}

export const CALENDAR_START_YEAR = 2000

export const MONTHS = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`
]

export const FormErrorMessages = {
  [FormElements.INPUT]: {
    NO_DATA: `Please, fill in required field`
  },
  [FormElements.DATE_RANGE_PICKER]: {
    NO_DATA: `Please, provide date range`,
    INVALID_RANGE: `Selected range is invalid. Please, check the range data.`
  }
}

export const SCROLL_TO_ELEMENT_OFFSET = 50

export enum CryptoOptions {
  BTC = `BTC`,
  ERC20 = `ERC20`
}
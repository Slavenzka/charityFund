import { Control, NestedValue, UnpackNestedValue } from 'react-hook-form'
import { SelectCustomOptionType } from 'components/molecules/SelectCustom/SelectCustom.spec'

export enum FormElements {
  INPUT = `INPUT`,
  INPUT_IMAGE = `INPUT_IMAGE`,
  INPUT_CHECKBOX = `INPUT_CHECKBOX`,
  DATEPICKER = `DATEPICKER`,
  DATE_RANGE_PICKER = `DATE_RANGE_PICKER`,
  SELECT = `SELECT`,
  TEXT_AREA_VARIABLE_HEIGHT = `TEXT_AREA_VARIABLE_HEIGHT`
}

type FormItemDataType = string | number | Date | null | undefined | NestedValue;

export interface FormConfigItemType {
  element: Pick<FormElements, keyof FormElements>,
  name: string,
  defaultValue?: FormItemDataType,
  validation?: {
    [key: string]: boolean;
  };
  options?: SelectCustomOptionType[];
}

export interface FormConfigType {
  [key: string]: FormConfigItemType;
}

export interface FormProps {
  formConfig: FormConfigItemType[];
  submitForm: <FormMethods>(data: UnpackNestedValue<FormItemDataType>, methods: FormMethods) => void;
  children: ({
    items,
    control
  }: {
    items: JSX.Element[],
    control: Control
  }) => JSX.Element
}
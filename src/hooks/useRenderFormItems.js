import { Fragment, useMemo } from 'react'
import { Controller } from 'react-hook-form'
import Input, { InputVariants } from 'components/atoms/Input/Input'
import { FormElements, FormErrorMessages } from 'utils/const'
import ImageInput from 'components/organisms/ImageInput/ImageInput'
import ImageInputPreview from 'components/molecules/ImageInputPreview/ImageInputPreview'
import Datepicker from 'components/organisms/Datepicker/Datepicker'
import DateRangePicker from 'components/organisms/DateRangePicker/DateRangePicker'
import SelectCustom from 'components/molecules/SelectCustom/SelectCustom'
import TextareaVariableHeight from 'components/organisms/TextareaVariableHeight/TextareaVariableHeight'

function useRenderFormItems ({ list, control }) {
  return useMemo(() => list.map(({
    element,
    name,
    validation = {},
    defaultValue,
    ...item
  }) => {
    switch (element) {
      case FormElements.INPUT_IMAGE: {
        return (
          <Fragment key={name}>
            <Controller
              render={({
                field: { name, value, onChange },
                fieldState: { error }
              }) => (
                <ImageInput
                  ImagePreview={ImageInputPreview}
                  error={error?.message ?? error}
                  name={name}
                  value={value}
                  onChange={onChange}
                  {...item}
                />
              )}
              control={control}
              rules={validation}
              name={name}
              defaultValue={defaultValue}
            />
          </Fragment>
        )
      }
      case FormElements.DATEPICKER: {
        return (
          <Fragment key={name}>
            <Controller
              render={({
                field: { value, name, onChange },
                fieldState: { error }
              }) => (
                <Datepicker
                  {...item}
                  error={error?.message ?? error}
                  isRequired={Boolean(validation?.required)}
                  name={name}
                  onChange={onChange}
                  value={value}
                />
              )}
              control={control}
              rules={validation}
              name={name}
              defaultValue={defaultValue ?? null}
            />
          </Fragment>
        )
      }
      case FormElements.DATE_RANGE_PICKER: {
        return (
          <Fragment key={name}>
            <Controller
              render={({
                field: { value, name, onChange},
                fieldState: { error }
              }) => (
                <DateRangePicker
                  {...item}
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error?.message ?? error}
                  isRequired={Boolean(validation?.required)}
                />
              )}
              control={control}
              rules={{
                ...validation,
                validate: {
                  validRange: ({from, to}) => {
                    const isValid = (!from && !to) || (to && from && to >= from)
                    return isValid || FormErrorMessages[FormElements.DATE_RANGE_PICKER].INVALID_RANGE
                  }
                }
              }}
              name={name}
              defaultValue={defaultValue ?? {
                from: null,
                to: null
              }}
            />
          </Fragment>
        )
      }
      case FormElements.SELECT: {
        return (
          <Fragment key={name}>
            <Controller
              render={({
                  field: { ref, ...field },
                  fieldState: { error }
              }) => (
                <SelectCustom
                  error={error?.message ?? error}
                  formRef={ref}
                  isRequired={Boolean(validation?.required)}
                  {...field}
                  {...item}
                />
              )}
              control={control}
              rules={validation}
              name={name}
              defaultValue={defaultValue ?? ``}
            />
          </Fragment>
        )
      }
      case FormElements.TEXT_AREA_VARIABLE_HEIGHT: {
        return (
          <Fragment key={name}>
            <Controller
              render={({
                  field: { ref, ...field },
                  fieldState: { error }
              }) => (
                <TextareaVariableHeight
                  error={error?.message ?? error}
                  formRef={ref}
                  isRequired={Boolean(validation?.required)}
                  {...field}
                  {...item}
                />
              )}
              control={control}
              rules={validation}
              name={name}
              defaultValue={defaultValue ?? ``}
            />
          </Fragment>
        )
      }
      case FormElements.INPUT_CHECKBOX: {
        return (
          <Fragment key={name}>
            <Controller
              render={({
                field: { ref, value, ...field },
                fieldState: { error }
              }) => (
                <Input
                  checked={value}
                  error={error?.message ?? error}
                  formRef={ref}
                  isRequired={Boolean(validation?.required)}
                  variant={InputVariants.CHECKBOX_DEFAULT}
                  {...field}
                  {...item}
                />
              )}
              control={control}
              rules={validation}
              name={name}
              defaultValue={defaultValue ?? false}
            />
          </Fragment>
        )
      }
      default: {
        return (
          <Fragment key={name}>
            <Controller
              render={({
                  field: { ref, ...field },
                  fieldState: { error }
              }) => (
                <Input
                  error={error?.message ?? error}
                  formRef={ref}
                  isRequired={Boolean(validation?.required)}
                  {...field}
                  {...item}
                />
              )}
              control={control}
              rules={validation}
              name={name}
              defaultValue={defaultValue ?? ``}
            />
          </Fragment>
        )
      }
    }
  }), [list, control])
}

export default useRenderFormItems

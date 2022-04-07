export interface DatepickerControlsProps {
  onChange: (timestamp: number) => void,
  handleConfirm: () => void,
  handleCancel: () => void,
  label?: string,
}
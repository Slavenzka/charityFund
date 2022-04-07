import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { StoriesExportObject } from 'stories/specs/index.spec'
import DateRangePickerWithControls from 'components/organisms/DateRangePickerWithControls/DateRangePickerWithControls'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'
import { getFormattedDate } from 'utils'

const list: ListItemProps[] = [
  {
    heading: `Default state`,
    component: (
      <StoriesStoreProvider>
        {({store: {range}, updateRange}) => (
          <DateRangePickerWithControls
            value={range}
            onChange={updateRange}
            label="Date range label"
            name="dateRangePicker"
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store: {range}, updateRange}) => (
    <DateRangePickerWithControls
      value={range}
      onChange={updateRange}
      label="Date range label"
      name="dateRangePicker"
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Error state`,
    component: (
      <StoriesStoreProvider>
        {({store: {range}, updateRange}) => (
          <DateRangePickerWithControls
            value={range}
            onChange={updateRange}
            label="Date range label"
            name="dateRangePicker"
            error="Some demo error message"
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store: {range}, updateRange}) => (
    <DateRangePickerWithControls
      value={range}
      onChange={updateRange}
      label="Date range label"
      name="dateRangePicker"
      error="Some demo error message"
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `isRequired state`,
    component: (
      <StoriesStoreProvider>
        {({store: {range}, updateRange}) => (
          <DateRangePickerWithControls
            value={range}
            onChange={updateRange}
            label="Date range label"
            name="dateRangePicker"
            isRequired
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store: {range}, updateRange}) => (
    <DateRangePickerWithControls
      value={range}
      onChange={updateRange}
      label="Date range label"
      name="dateRangePicker"
      isRequired
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `W/ custom trigger`,
    component: (
      <StoriesStoreProvider>
        {({store: {range}, updateRange}) => (
          <DateRangePickerWithControls
            value={range}
            onChange={updateRange}
            label="Date range label"
            name="dateRangePicker"
            CustomTrigger={({value: {from, to}, onClick}) => (
              <div onClick={onClick} style={{fontSize: `1.2rem`}}>
                Custom trigger component: from {`${from ? new Date(from) : "N/A"}`} to {`${to ? new Date(to) : "N/A"}`}
              </div>
            )}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store: {range}, updateRange}) => (
    <DateRangePickerWithControls
      value={range}
      onChange={updateRange}
      label="Date range label"
      name="dateRangePicker"
      CustomTrigger={({value: {from, to}, onClick}) => (
        <div onClick={onClick} style={{fontSize: \`1.2rem\`}}>
          Custom trigger component: from {\`{from ? new Date(from) : "N/A"}\`} to {\`{to ? new Date(to) : "N/A"}\`}
        </div>
      )}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Organisms/DateRangePickerWithControls`,
  component: DateRangePickerWithControls,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`DateRangePickerWithControls`}
      componentDescription={(
        <>
          DateRangePicker version with controls to reset picker status or to submit its value to external controller
        </>
      )}
      proptypesString={(
`
  export interface DateRangePickerValueType {
  from: number,
  to: number
}

export interface DateRangePickerControlProps {
  /*
  * State update function
  */
  onChange: (newValue: DateRangePickerValueType) => void,
  /*
  * Actual value from state
  */
  value: DateRangePickerValueType,
}

export interface DateRangePickerProps extends
  PropsWithClassName,
  PropsFormElement<DateRangePickerValueType,DateRangePickerValueType>,
  DateRangePickerControlProps {
  /*
  * A way to pass additional content to be rendered below calendars, e.g. controls from controller wrapper
  */
  extraContent?: ReactNode,
  /*
  * Optional component to replace default input field for indicating selected range and toggling range picker
  */
  CustomTrigger?: ElementType,
  /*
  * Error message from form state manager
  */
  error?: string,
  /*
  * Label text for the trigger input
  */
  label?: string,
  /*
  * Received the {from, to} state and returns the string that becomes the value of trigger input
  */
  inputValueFormatter?: (value: DateRangePickerValueType) => string,
  /*
  * Toggles application of "is required" properties
  */
  isRequired?: boolean,
  /*
  * Style variant of default input component
  */
  variant?: InputVariants;
}
`
      )}
    />
  )]
} as StoriesExportObject
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import DateRangePicker from 'components/organisms/DateRangePicker/DateRangePicker'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'
import { getFormattedDate } from 'utils'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'

const list: ListItemProps[] = [
  {
    heading: `Default state`,
    component: (
      <StoriesStoreProvider>
        {({store: {range}, updateRange}) => (
          <DateRangePicker
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
    <DateRangePicker
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
          <DateRangePicker
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
    <DateRangePicker
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
    heading: `W/ custom input value formatter`,
    component: (
      <StoriesStoreProvider>
        {({store: {range}, updateRange}) => (
          <DateRangePicker
            value={range}
            onChange={updateRange}
            label="Date range label"
            name="dateRangePicker"
            inputValueFormatter={({from ,to}) => {
              return `Range start with ${from ? getFormattedDate(from) : `N/A`} and finishes with ${to ? getFormattedDate(to) : `N/A`}`
            }}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {range}, updateRange}) => (
    <DateRangePicker
      value={range}
      onChange={updateRange}
      label="Date range label"
      name="dateRangePicker"
      inputValueFormatter={({from ,to}) => {
        return \`Range start with {from ? getFormattedDate(from) : 'N/A'} and finishes with {to ? getFormattedDate(to) : 'N/A'}\`
      }}
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
          <DateRangePicker
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
    <DateRangePicker
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
          <DateRangePicker
            value={range}
            onChange={updateRange}
            label="Date range label"
            name="dateRangePicker"
            CustomTrigger={({value: {from, to}, onClick}) => (
              <div onClick={onClick}>
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
    <DateRangePicker
      value={range}
      onChange={updateRange}
      label="Date range label"
      name="dateRangePicker"
      CustomTrigger={({value: {from, to}, onClick}) => (
        <div onClick={onClick}>
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
  title: `Components/Organisms/DateRangePicker`,
  component: DateRangePicker,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`DateRangePicker`}
      componentDescription={(
        <>
          Renders date range picker with capability to provide custom function to modify input content
        </>
      )}
      proptypesString={(
`
interface DateRangePickerValueType {
  from: number,
  to: number
}

export interface DateRangePickerProps extends PropsWithClassName, PropsFormElement<DateRangePickerValueType, DateRangePickerValueType>{
  /*
  * Optional component to replace default input field for indicating selected range and toggling range picker
  */
  CustomTrigger?: ElementType,
  /*
  * Error message from form state manager
  */
  error?: string,
  /*
  * State update function
  */
  onChange: (newValue: DateRangePickerValueType) => void,
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
  * Actual value from state
  */
  value: DateRangePickerValueType,
}
`
      )}
    />
  )]
} as StoriesExportObject
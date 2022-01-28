import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import DateRangePicker from 'components/organisms/DateRangePicker/DateRangePicker'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'
import { getFormattedDate } from 'utils'

const list = [
  {
    heading: `Default state`,
    component: (
      <StoriesStoreProvider>
        {({store: {range}, updateRange}) => (
          <DateRangePicker
            value={range}
            onChange={updateRange}
            label="Date range label"
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
DateRangePicker.propTypes = {
  /*
  * External class name that will be applied to component's wrapper
  */
  className: PropTypes.string,
  /*
  * Error message from form state manager
  */
  error: PropTypes.string,
  /*
  * Label text for the trigger input
  */
  label: PropTypes.string,
  /*
  * State update function
  */
  onChange: PropTypes.func,
  /*
  * Received the {from, to} state and returns the string that becomes the value of trigger input
  */
  inputValueFormatter: PropTypes.func,
  /*
  * Actual value from state in the form of timestamp or null in no default value was provided
  */
  value: PropTypes.number,
}
`
      )}
    />
  )]
}
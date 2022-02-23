import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Datepicker from 'components/organisms/Datepicker/Datepicker'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'

const list = [
  {
    heading: `Default state w/ label`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            label="Datepicker label"
            onChange={updateDate}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      label="Datepicker label"
      onChange={updateDate}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Default state w/ label & required`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            label="Datepicker label"
            onChange={updateDate}
            isRequired
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      label="Datepicker label"
      onChange={updateDate}
      isRequired
   />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Default state w/o label`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            onChange={updateDate}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      onChange={updateDate}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Default state w/ error`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            onChange={updateDate}
            label="Datepicker label"
            error="Some error message"
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      onChange={updateDate}
      label="Datepicker label"
      error="Some error message"
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Datepicker with custom input`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            label="Datepicker label"
            onChange={updateDate}
            InputComponent={({formRef, ...props}) => (
              <div
                ref={formRef}
                {...props}
              >
                Custom input is here and current value is {props.value ? String(new Date(props.value)) : `N/A`}
              </div>
            )}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      label="Datepicker label"
      onChange={updateDate}
      InputComponent={({formRef, ...props}) => (
        <div
          ref={formRef}
          {...props}
        >
          Custom input is here and current value is {props.value ? String(new Date(props.value)) : \`N/A\`}
        </div>
      )}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Disabled state`,
    component: (
      <Datepicker
        value={Date.now()}
        label="Datepicker label"
        onChange={evt => console.log(`State updated with ${ new Date(evt) }!`)}
        isDisabled
      />
    ),
    code: (
      `
<Datepicker
  value={Date.now()}
  label="Datepicker label"
  onChange={evt => console.log(\`State updated with {new Date(evt)}!\`)}
  isDisabled
/>
`
    )
  },
  {
    heading: `Datepicker w/o timepicker`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            label="Datepicker label"
            onChange={updateDate}
            isHoursPickRequired={false}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      label="Datepicker label"
      onChange={updateDate}
      isHoursPickRequired={false}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Datepicker w/ hours picker only`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            label="Datepicker label"
            onChange={updateDate}
            isMinutesPickRequired={false}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      label="Datepicker label"
      onChange={updateDate}
      isMinutesPickRequired={false}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Datepicker w/o close on date select`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            label="Datepicker label"
            onChange={updateDate}
            isCloseOnSelect={false}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      label="Datepicker label"
      onChange={updateDate}
      isCloseOnSelect={false}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Datepicker w/ custom controls`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            label="Datepicker label"
            onChange={updateDate}
            renderCustomControls={({date, onChange, onSubmit, onCancel}) => (
              <>
                <button
                  onClick={() => {
                    onCancel()
                  }}
                  type="button"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onChange(date)
                    onSubmit()
                  }}
                  type="button"
                >
                  Update state
                </button>
              </>
            )}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store: {date}, updateDate}) => (
    <Datepicker
      value={date}
      label="Datepicker label"
      onChange={updateDate}
      renderCustomControls={({date, onChange, onSubmit, onCancel}) => (
        <>
          <button
            onClick={() => {
              onCancel()
            }}
            type="button"
          >
            Close
          </button>
          <button
            onClick={() => {
              onChange(date)
              onSubmit()
            }}
            type="button"
          >
            Update state
          </button>
        </>
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
  title: `Components/Organisms/Datepicker`,
  component: Datepicker,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Datepicker`}
      componentDescription={(
        <>
          <p>
            Renders date picker element for selecting single day only with optional selectors of hours and minutes.
          </p>
          <p>
            {`If custom input component is provided then label doesn't render it's text content and passes label text
              down to custom input.`}
          </p>
        </>
      )}
      references={[
        {
          label: `react-datepicker`,
          url: `https://reactdatepicker.com/`
        },
        {
          label: `react-datepicker props description`,
          url: `https://github.com/Hacker0x01/react-datepicker/blob/master/docs/index.md`
        },
      ]}
      proptypesString={(
`
Datepicker.propTypes = {
  /*
  * External class name that will be applied to component's wrapper
  */
  className: PropTypes.string,
  /*
  * Error message from form state manager
  */
  error: PropTypes.string,
  /*
  * Toggles calendar close on date select
  */
  isCloseOnSelect: PropTypes.bool,
  /*
  * Toggles "is disabled" class on component's wrapper
  */
  isDisabled: PropTypes.bool,
  /*
  * Toggles render of hour selector
  */
  isHoursPickRequired: PropTypes.bool,
  /*
  * Toggles render of minutes selector
  */
  isMinutesPickRequired: PropTypes.bool,
  /*
  * A way to pass custom component that toggles visibility of datepicker and renders its current value
  */
  InputComponent: PropTypes.elementType,
  /*
  * Toggles "is required" styles on label
  */
  isRequired: PropTypes.bool,
  /*
  * Label text for the trigger input
  */
  label: PropTypes.string,
  /*
  * State update function
  */
  onChange: PropTypes.func,
  /*
  * Actual value from state in the form of timestamp or null in no default value was provided
  */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]),
  /*
  * Render function for external controls over state. If provided datepicker component won't call onChange on every
  * update of the selected date and will pass {date, onChange, onSubmit, onCancel} to external component.
  */
  renderCustomControls: PropTypes.func,
}
`
      )}
      defaultPropsString={(
`
Datepicker.defaultProps = {
  isCloseOnSelect: true,
  isHoursPickRequired: true,
  isMinutesPickRequired: true,
  value: null,
}
`
      )}
    />
  )]
}
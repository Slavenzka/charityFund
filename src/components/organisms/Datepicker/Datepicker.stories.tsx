import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Datepicker from 'components/organisms/Datepicker/Datepicker'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { FC } from 'react'
import { StoriesExportObject } from 'stories/specs/index.spec'

const list: ListItemProps[] = [
  {
    heading: `Default state w/ label`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <Datepicker
            value={date}
            label="Datepicker label"
            onChange={updateDate}
            name="datepicker"
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
      name="datepicker"
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
            name="datepicker"
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
      name="datepicker"
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
            name="datepicker"
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
      name="datepicker"
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
            name="datepicker"
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
      name="datepicker"
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
            name="datepicker"
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
      name="datepicker"
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
        name="datepicker"
        isDisabled
      />
    ),
    code: (
      `
<Datepicker
  value={Date.now()}
  label="Datepicker label"
  onChange={evt => console.log(\`State updated with {new Date(evt)}!\`)}
  name="datepicker"
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
            name="datepicker"
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
      name="datepicker"
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
            name="datepicker"
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
      name="datepicker"
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
            name="datepicker"
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
      name="datepicker"
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
            name="datepicker"
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
      name="datepicker"
    />
  )}
</StoriesStoreProvider>
`
    )
  },
]

export const Usage: FC = () => <ComponentRenderTemplateStory list={list} />

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
export type DatepickerValueType = number

export interface DateInputType {
  ({
    value,
    onClick
  }: {
    value: string,
    onClick: () => void
  }): JSX.Element
}

interface RenderCustomControlsType {
  ({
    date,
    onChange,
    onSubmit,
    onCancel
  }: {
    date: DatepickerValueType,
    onChange: (evt: DatepickerValueType) => void,
    onSubmit: () => void,
    onCancel: () => void
  }): JSX.Element
}

export interface DatepickerProps extends PropsWithClassName, PropsFormElement<DatepickerValueType, DatepickerValueType> {
  /*
  * Error message from form state manager
  */
  error?: string;
  /*
  * A way to pass custom component that toggles visibility of datepicker and renders its current value
  */
  InputComponent?: ElementType;
  /*
  * Toggles calendar close on date select
  */
  isCloseOnSelect?: boolean;
  /*
  * Toggles "is disabled" class on component's wrapper
  */
  isDisabled?: boolean;
  /*
  * Toggles render of hour selector
  */
  isHoursPickRequired?: boolean;
  /*
  * Toggles render of minutes selector
  */
  isMinutesPickRequired?: boolean;
  /*
  * Toggles "is required" styles on label
  */
  isRequired?: boolean;
  /*
  * Label text for the trigger input
  */
  label?: string;
  /*
  * Render function for external controls over state. If provided datepicker component won't call onChange on every
  * update of the selected date and will pass {date, onChange, onSubmit, onCancel} to external component.
  */
  renderCustomControls?: RenderCustomControlsType,
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
} as StoriesExportObject
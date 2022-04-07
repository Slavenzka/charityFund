import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { StoriesExportObject, StoriesListType } from 'stories/specs/index.spec'
import DatepickerWithControls from 'components/organisms/DatepickerWithControls/DatepickerWithControls'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'

const list: StoriesListType = [
  {
    heading: `Default state w/ label`,
    component: (
      <StoriesStoreProvider>
        {({store: {date}, updateDate}) => (
          <DatepickerWithControls
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
    <DatepickerWithControls
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
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Organisms/DatepickerWithControls`,
  component: DatepickerWithControls,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`DatepickerWithControls`}
      componentDescription={(
        <>
          A component description
        </>
      )}
      proptypesString={(
`

`
      )}
      defaultPropsString={(
`

`
      )}
    />
  )]
} as StoriesExportObject
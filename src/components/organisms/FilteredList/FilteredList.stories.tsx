import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import FilteredList from 'components/organisms/FilteredList/FilteredList'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'
import { SelectCustomOptionType } from 'components/molecules/SelectCustom/SelectCustom.spec'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'

const options = [
  {
    label: `one`,
    value: 1
  },
  {
    label: `two`,
    value: Date.now()
  },
  {
    label: `three`,
    value: [`this`, `that`]
  },
  {
    label: `four`,
    value: {
      question: `answer`
    }
  },
]

const list: ListItemProps[] = [
  {
    heading: `Pre-defined input and option components`,
    component: (
      <StoriesStoreProvider>
        {({store, updateFilteredListSelection}) => (
          <FilteredList
            options={[
              {
                label: `one`,
                value: 1
              },
              {
                label: `two`,
                value: 2
              },
              {
                label: `three`,
                value: 3
              },
              {
                label: `four`,
                value: 4
              },
            ]}
            value={store.filteredList}
            onChange={updateFilteredListSelection}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store, updateFilteredListSelection}) => (
    <FilteredList
      options={[
        {
          label: \`one\`,
          value: 1
        },
        {
          label: \`two\`,
          value: Date.now()
        },
        {
          label: \`three\`,
          value: [\`this\`, \`that\`]
        },
        {
          label: \`four\`,
          value: {
            question: \`answer\`
          }
        }
      ]}
      value={store.filteredList}
      onChange={updateFilteredListSelection}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Custom input component`,
    component: (
      <StoriesStoreProvider>
        {({store, updateFilteredListSelection}) => (
          <FilteredList
            options={options}
            value={store.filteredList}
            onChange={updateFilteredListSelection}
            CustomInput={({onChange, value}) => (
              <input
                value={value}
                onChange={onChange}
                type="text"
                style={{
                  width: `100%`
                }}
              />
            )}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store, updateFilteredListSelection}) => (
    <FilteredList
      options={options}
      value={store.filteredList}
      onChange={updateFilteredListSelection}
      CustomInput={({onChange, value}) => (
        <input
          value={value}
          onChange={onChange}
          type="text"
          style={{
            width: \`100%\`
          }}
        />
      )}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Custom option component`,
    component: (
      <StoriesStoreProvider>
        {({store, updateFilteredListSelection}) => (
          <FilteredList
            options={options}
            value={store.filteredList}
            onChange={updateFilteredListSelection}
            CustomOption={({isSelected, children, ...props}) => (
              <div
                {...props}
              >
                {`${children} - ${isSelected ? `is selected` : `is not selected`}`}
              </div>
            )}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store, updateFilteredListSelection}) => (
    <FilteredList
      options={options}
      value={store.filteredList}
      onChange={updateFilteredListSelection}
      CustomOption={({isSelected, children, ...props}) => (
        <div
          {...props}
        >
          {\`{children} - {isSelected ? \`is selected\` : \`is not selected\`}\`}
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
  title: `Components/Organisms/FilteredList`,
  component: FilteredList,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`FilteredList`}
      componentDescription={(
        <>
          Renders provided list of options and provides filtering by uppercased substring.
        </>
      )}
      proptypesString={(
`
FilteredList.propTypes = {
  /*
  * External classname for extra styling
  */
  className: PropTypes.string,
  /*
  * Complete list of available options
  */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ).isRequired,
}
`
      )}
    />
  )]
} as StoriesExportObject
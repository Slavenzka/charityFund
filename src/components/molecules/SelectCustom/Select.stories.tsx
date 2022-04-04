import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Select from 'react-select'
import SelectCustom from 'components/molecules/SelectCustom/SelectCustom'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'
import IconClose from 'assets/icons/IconClose'
import classnames from 'classnames'
import css from 'stories/styles/modules/Select.module.scss'
import IconSpinnerRotatingCircle from 'assets/icons/IconSpinnerRotatingCircle'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { FC } from 'react'
import { StoriesExportObject } from 'stories/specs/index.spec'

const list: ListItemProps[] = [
  {
    heading: `Default state w/ label`,
    component: (
      <StoriesStoreProvider>
        {({store, updateSelectSync}) => (
          <SelectCustom
            value={store.selectSync.value}
            onChange={updateSelectSync}
            options={store.selectSync.options}
            label="Select label text"
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store, updateSelectSync}) => (
    <SelectCustom
      value={store.selectSync.value}
      onChange={updateSelectSync}
      options={store.selectSync.options}
      label="Select label text"
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
        {({store, updateSelectSync}) => (
          <SelectCustom
            value={store.selectSync.value}
            onChange={updateSelectSync}
            options={store.selectSync.options}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store, updateSelectSync}) => (
    <SelectCustom
      value={store.selectSync.value}
      onChange={updateSelectSync}
      options={store.selectSync.options}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `isDisabled`,
    component: (
      <StoriesStoreProvider>
        {({store, updateSelectSync}) => (
          <SelectCustom
            value={store.selectSync.value}
            onChange={updateSelectSync}
            options={store.selectSync.options}
            label="Select label text"
            isDisabled
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store, updateSelectSync}) => (
    <SelectCustom
      value={store.selectSync.value}
      onChange={updateSelectSync}
      options={store.selectSync.options}
      label="Select label text"
      isDisabled
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `isLoading w/ default spinner`,
    component: (
      <StoriesStoreProvider>
        {({store, updateSelectSync}) => (
          <SelectCustom
            value={store.selectSync.value}
            onChange={updateSelectSync}
            options={store.selectSync.options}
            label="Select label text"
            isLoading
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store, updateSelectSync}) => (
    <SelectCustom
      value={store.selectSync.value}
      onChange={updateSelectSync}
      options={store.selectSync.options}
      label="Select label text"
      isLoading
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `isLoading w/ custom spinner`,
    component: (
      <StoriesStoreProvider>
        {({store, updateSelectSync}) => (
          <SelectCustom
            value={store.selectSync.value}
            onChange={updateSelectSync}
            options={store.selectSync.options}
            label="Select label text"
            Spinner={IconSpinnerRotatingCircle}
            isLoading
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store, updateSelectSync}) => (
    <SelectCustom
      value={store.selectSync.value}
      onChange={updateSelectSync}
      options={store.selectSync.options}
      label="Select label text"
      Spinner={IconSpinnerRotatingCircle}
      isLoading
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `isRequired`,
    component: (
      <StoriesStoreProvider>
        {({store, updateSelectSync}) => (
          <SelectCustom
            value={store.selectSync.value}
            onChange={updateSelectSync}
            options={store.selectSync.options}
            label="Select label text"
            isRequired
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store, updateSelectSync}) => (
    <SelectCustom
      value={store.selectSync.value}
      onChange={updateSelectSync}
      options={store.selectSync.options}
      label="Select label text"
      isRequired
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `W/ custom indicator icon`,
    component: (
      <StoriesStoreProvider>
        {({store, updateSelectSync}) => (
          <SelectCustom
            value={store.selectSync.value}
            onChange={updateSelectSync}
            options={store.selectSync.options}
            label="Select label text"
            renderCustomIndicator={({className, innerProps}) => (
              <IconClose
                className={classnames(className, css.icon)}
                {...innerProps}
              />
            )}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store, updateSelectSync}) => (
    <SelectCustom
      value={store.selectSync.value}
      onChange={updateSelectSync}
      options={store.selectSync.options}
      label="Select label text"
      renderCustomIndicator={({className, innerProps}) => (
        <IconClose
          className={classnames(className, css.icon)}
          {...innerProps}
        />
      )}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `W/ custom option component`,
    component: (
      <StoriesStoreProvider>
        {({store, updateSelectSync}) => (
          <SelectCustom
            value={store.selectSync.value}
            onChange={updateSelectSync}
            options={store.selectSync.options}
            label="Select label text"
            renderCustomOption={({className, props: {innerProps, children}}) => (
              <div
                className={classnames(className, css.option)}
                {...innerProps}
              >
                {`Option label is: ${children}`}
              </div>
            )}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
      `
<StoriesStoreProvider>
  {({store, updateSelectSync}) => (
    <SelectCustom
      value={store.selectSync.value}
      onChange={updateSelectSync}
      options={store.selectSync.options}
      label="Select label text"
      renderCustomOption={({className, props: {innerProps, children}}) => (
        <div
          className={classnames(className, css.option)}
          {...innerProps}
        >
          {\`Option label is: {children}\`}
        </div>
      )}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
]

export default {
  title: `Components/Molecules/Select`,
  component: Select,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Select`}
      componentDescription={(
        <>
          A select component that provides capability to customize styles and replace
          dropdown indicator or option components with custom ones. In case of need this component
          can be extended with additional customization of react-select elements.
        </>
      )}
      references={[
        {
          label: `react-select`,
          url: `https://react-select.com/home`
        }
      ]}
      proptypesString={(
`
export enum SelectVariants {
  DEFAULT = \`DEFAULT\`
}

export interface SelectCustomOptionType<T = string> {
  label: string,
  value: T
}

interface SelectCustomComponentProps {
  [key: string]: string | ReactNode;
}

interface SelectCustomRenderFunction {
  ({
     innerProps,
     props,
     className
  }: {
     innerProps: SelectCustomComponentProps,
     props: SelectCustomComponentProps,
     className: string,
   }
  ): JSX.Element
}

export interface SelectCustomProps extends PropsWithClassName, PropsFormElement<SelectCustomOptionType, (value: SelectCustomOptionType) => void> {
  /*
  * Select label text
  */
  label: string;
  /*
  * Applies "is disabled" styles
  */
  isDisabled: boolean;
  /*
  * Applies "is loading" styles and replaces dropdown indicator with a spinner
  */
  isLoading: boolean;
  /*
  * Applies "is required" styles
  */
  isRequired: boolean;
  /*
  * Ref getter, e.g. from react-hook-form Controller
  */
  formRef: RefGetterType;
  /*
  * List of all available options
  */
  options: SelectCustomOptionType[];
  /*
  * Render function for the external icon to replace default one
  */
  renderCustomIndicator: SelectCustomRenderFunction;
  /*
  * Render function for the external custom option component
  */
  renderCustomOption: SelectCustomRenderFunction;
  /*
  * Spinner icon component for "is loading" state
  */
  Spinner: FC<IconProps>;
  /*
  * Defines style presets
  */
  variant: SelectVariants;
}
`
      )}
      defaultPropsString={(
`
SelectCustom.defaultProps = {
  Spinner: IconSpinner,
  variant: SelectVariants.DEFAULT
}
`
      )}
    />
  )]
} as StoriesExportObject

export const Default: FC = () => <ComponentRenderTemplateStory list={list} />

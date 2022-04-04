import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import LogoProvider from 'components/organisms/LogoProvider/LogoProvider'
import {BrowserRouter} from 'react-router-dom'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'

const currentPath = "/iframe.html"

const list: ListItemProps[] = [
  {
    heading: `Logo rendered as it is`,
    component: (
      <LogoProvider baseUrl={currentPath}>
        <span>Some logo component</span>
      </LogoProvider>
    ),
    code: (
`
<LogoProvider baseUrl={currentPath}>
  <span>Some logo component</span>
</LogoProvider>
`
    )
  },
  {
    heading: `Logo rendered wrapped inside Link`,
    component: (
      <LogoProvider>
        <span>Some logo component</span>
      </LogoProvider>
    ),
    code: (
`
<LogoProvider>
  <span>Some logo component</span>
</LogoProvider>
`
    )
  },
]

export const Usage = () => (
  <BrowserRouter>
    <ComponentRenderTemplateStory list={list} />
  </BrowserRouter>
)

export default {
  title: `Components/Organisms/LogoProvider`,
  component: LogoProvider,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`LogoProvider`}
      componentDescription={(
        <>
          Decides whether contents should be renders wrapped into Link or not
        </>
      )}
      proptypesString={(
`
export interface LogoProviderProps {
  /*
  * URL that triggers component to render logo without Link wrapper, otherwise wraps it into Link with baseUrl route
  */
  baseUrl?: string;
}
`
      )}
      defaultPropsString={(
`
LogoProvider.defaultProps = {
  baseUrl: HOME_PAGE
}
`
      )}
    />
  )]
} as StoriesExportObject
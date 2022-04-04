import { FC } from 'react'
import Button from 'components/atoms/Button/Button'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { StoriesExportObject, StoriesListType } from 'stories/specs/index.spec'

const list: StoriesListType = [
  {
    heading: `Button - variant DEFAULT`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
      >
        Some button label
      </Button>
    ),
    code: (
`<Button
  onClick={() => alert(\`Button clicked!\`)}
>
  Some button label
</Button>
`
    )
  },
  {
    heading: `Link - variant DEFAULT`,
    component: (
      <Button
        url="https://google.com"
      >
        Some link label
      </Button>
    ),
    code: (
`
<Button
  url="https://google.com"
>
  Some link label
</Button>
`
    )
  },
]

export const Default: FC = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Atoms/Button`,
  component: Button,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Button`}
      componentDescription={(
        <>
          <span style={{display: `block`, margin: `1rem 0`}}>
            A button component that can render both button and link (web or client route depending on the url string).
            The main idea is to provide the default button state that simply renders children inside the button tag with options
            for extension via configuring variant and height props that should cause to render modified default button (e.g. with custom icon or
            with some other customization) via switch statement. Variant props define shape and colors while height props define sizes.
          </span>
          <span style={{display: `block`, margin: `1rem 0`}}>
            Be aware that default button state completely resets button styles including reset font-size to 0. So any variant
            that requires text content requires additional css text properties.
          </span>
        </>
      )}
      proptypesString={(
`
export enum ButtonVariants {
  DEFAULT = \`DEFAULT\`
}

export enum ButtonHeights {
  SMALL = \`SMALL\`,
  REGULAR = \`REGULAR\`,
  LARGE = \`LARGE\`
}

export enum ButtonTypes {
  BUTTON = \`button\`,
  SUBMIT = \`submit\`
}

interface ButtonAsButtonProps {
  /*
  * Adds styling for the loading state of the button
  */
  isLoading?: boolean;
  /*
  * Definition of button type
  */
  type?: string;
  /*
  * Button click handler
  */
  onClick?: () => void;
}

interface ButtonAsLinkProps {
  /*
  * Triggers component to render a link instead of a button. If URL string contains "http" then it would be a web link,
  * and react router link otherwise.
  */
  url?: string;
}

export interface DefaultButtonProps {
  /*
  * The contents of button
  */
  children?: string | ReactElement;
  /*
  * Optional external class name, that would be added to button
  */
  className?: string;
  /*
  * Adds styling for the disabled state of the button
  */
  isDisabled?: boolean;
  /*
  * Triggers button height style presets
  */
  height?: ButtonHeights;
  /*
  * Triggers custom button variant to render through the switch statement
  */
  variant?: ButtonVariants;
}

export type ButtonProps = DefaultButtonProps & Partial<ButtonAsButtonProps> & Partial<ButtonAsLinkProps>
`
      )}
      defaultPropsString={(
`
Button.defaultProps = {
  height: ButtonHeights.REGULAR,
  type: ButtonTypes.BUTTON,
  variant: ButtonVariants.DEFAULT,
}
`
      )}
    />
  )]
} as StoriesExportObject
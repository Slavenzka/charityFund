import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import VisibilityAnimationProvider from 'components/organisms/VisibilityAnimationProvider/VisibilityAnimationProvider'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'
import css from 'Pages/AnimationProviderExample/AnimationProviderExample.module.scss'
import classnames from 'classnames'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'

const list: ListItemProps[] = [
  {
    heading: `Default mode of component operation`,
    component: (
      <StoriesStoreProvider>
        {({store: {isVisible}, toggleTargetVisibility}) => (
          <section style={{height: `50rem`}}>
            <button
              onClick={toggleTargetVisibility}
              type="button"
            >
              Toggle element
            </button>
            <VisibilityAnimationProvider
              isVisible={isVisible}
              classNameVisible={css.itemVisible}
              classNameHidden={css.itemHidden}
            >
              {({animationClassName, getTargetRef, ...props}) => (
                <div
                  className={classnames(css.item, animationClassName)}
                  ref={getTargetRef as (node: HTMLDivElement) => void}
                  {...props}
                >
                  {isVisible
                    ? `Is visible`
                    : `Is hidden`
                  }
                </div>
              )}
            </VisibilityAnimationProvider>
          </section>
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {isVisible}, toggleTargetVisibility}) => (
    <section style={{height: \`50rem\`}}>
      <button
        onClick={toggleTargetVisibility}
        type="button"
      >
        Toggle element
      </button>
      <VisibilityAnimationProvider
        isVisible={isVisible}
        classNameVisible={css.itemVisible}
        classNameHidden={css.itemHidden}x
      >
        {({animationClassName, getTargetRef, ...props}) => (
          <div
            className={classnames(css.item, animationClassName)}
            ref={getTargetRef as (node: HTMLDivElement) => void}
            {...props}
          >
            {isVisible
              ? \`Is visible\`
              : \`Is hidden\`
            }
          </div>
        )}
      </VisibilityAnimationProvider>
    </section>
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Custom display value`,
    component: (
      <StoriesStoreProvider>
        {({store: {isVisible}, toggleTargetVisibility}) => (
          <section style={{height: `50rem`}}>
            <button
              onClick={toggleTargetVisibility}
              type="button"
            >
              Toggle element
            </button>
            <VisibilityAnimationProvider
              isVisible={isVisible}
              classNameVisible={css.itemVisible}
              classNameHidden={css.itemHidden}
              options={{
                displayType: `flex`
              }}
            >
              {({animationClassName, getTargetRef, ...props}) => (
                <div
                  className={classnames(css.item, animationClassName)}
                  ref={getTargetRef as (node: HTMLDivElement) => void}
                  {...props}
                >
                  {isVisible
                    ? `Is visible`
                    : `Is hidden`
                  }
                </div>
              )}
            </VisibilityAnimationProvider>
          </section>
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {isVisible}, toggleTargetVisibility}) => (
    <section style={{height: \`50rem\`}}>
      <button
        onClick={toggleTargetVisibility}
        type="button"
      >
        Toggle element
      </button>
      <VisibilityAnimationProvider
        isVisible={isVisible}
        classNameVisible={css.itemVisible}
        classNameHidden={css.itemHidden}
        options={{
          displayType: \`flex\`
        }}
      >
        {({animationClassName, getTargetRef, ...props}) => (
          <div
            className={classnames(css.item, animationClassName)}
            ref={getTargetRef as (node: HTMLDivElement) => void}
            {...props}
          >
            {isVisible
              ? \`Is visible\`
              : \`Is hidden\`
            }
          </div>
        )}
      </VisibilityAnimationProvider>
    </section>
  )}
</StoriesStoreProvider>
`
    )
  },
  {
    heading: `Keep target component in DOM after hiding animation`,
    component: (
      <StoriesStoreProvider>
        {({store: {isVisible}, toggleTargetVisibility}) => (
          <section style={{height: `50rem`}}>
            <button
              onClick={toggleTargetVisibility}
              type="button"
            >
              Toggle element
            </button>
            <VisibilityAnimationProvider
              isVisible={isVisible}
              classNameVisible={css.itemVisible}
              classNameHidden={css.itemHidden}
              options={{
                keepInDOMAfterRender: true
              }}
            >
              {({animationClassName, getTargetRef, ...props}) => (
                <div
                  className={classnames(css.item, animationClassName)}
                  ref={getTargetRef as (node: HTMLDivElement) => void}
                  {...props}
                >
                  {isVisible
                    ? `Is visible`
                    : `Is hidden`
                  }
                </div>
              )}
            </VisibilityAnimationProvider>
          </section>
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {isVisible}, toggleTargetVisibility}) => (
    <section style={{height: \`50rem\`}}>
      <button
        onClick={toggleTargetVisibility}
        type="button"
      >
        Toggle element
      </button>
      <VisibilityAnimationProvider
        isVisible={isVisible}
        classNameVisible={css.itemVisible}
        classNameHidden={css.itemHidden}
        options={{
          keepInDOMAfterRender: true
        }}
      >
        {({animationClassName, getTargetRef, ...props}) => (
          <div
            className={classnames(css.item, animationClassName)}
            ref={getTargetRef as (node: HTMLDivElement) => void}
            {...props}
          >
            {isVisible
              ? \`Is visible\`
              : \`Is hidden\`
            }
          </div>
        )}
      </VisibilityAnimationProvider>
    </section>
  )}
</StoriesStoreProvider>
`
    )
  },
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Organisms/VisibilityAnimationProvider`,
  component: VisibilityAnimationProvider,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`VisibilityAnimationProvider`}
      componentDescription={(
        <>
          The purpose of this wrapper is to insert target component into DOM before reveal animation/transition
          should start and remove it back from DOM after hiding animation/transition has finished, e.g.
          for modals, popup dialogue interfaces and etc.
        </>
      )}
      proptypesString={(
`
interface VisibilityAnimationProviderOptions {
  /*
  * Flag to keep element in dom after hiding animation or not
  */
  keepInDOMAfterRender?: boolean;
  /*
  * Value of display property applied to target element
  */
  displayType?: DisplayTypes;
}

interface RenderFunctionArguments {
  style: {
    display: DisplayTypes;
  };
  animationClassName: string;
  getTargetRef: (node: HTMLElement) => void;
}

export interface VisibilityAnimationProviderProps {
  /*
  * Class name that contains animation or transition to hide the target element
  */
  classNameHidden: string;
  /*
  * Class name that contains animation or transition to reveal the target element
  */
  classNameVisible: string;
  /*
  * Flag that controls target item visibility
  */
  isVisible?: boolean;
  /*
  * Fine-tuning of component operation
  */
  options: VisibilityAnimationProviderOptions;
  /**
  * Render function for the children component
  */
  children: (argsObject: RenderFunctionArguments) => JSX.Element;
}
`
      )}
      defaultPropsString={(
`
VisibilityAnimationProvider.defaultProps = {
  options: {
    keepInDOMAfterRender: false,
    displayType: \`block\`
  }
}
`
      )}
    />
  )]
} as StoriesExportObject
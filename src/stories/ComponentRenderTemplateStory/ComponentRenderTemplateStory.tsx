import React, { ReactElement } from 'react'
import css from './ComponentRenderTemplateStory.module.scss'
import HeadingStory from 'stories/HeadingStory/HeadingStory'
import CodeStory from 'stories/CodeStory/CodeStory'
import {
  ComponentRenderTemplateStoryProps
} from "stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec"

interface ComponentType {
  (args: ComponentRenderTemplateStoryProps): ReactElement
}

const ComponentRenderTemplateStory: ComponentType = ({
  list,
  itemStyles,
}) => {
  const renderItems = () => list.map(({heading, component, code}, index) => (
    <div
      style={{
        marginTop: `3rem`,
        width: `100%`,
        ...itemStyles
      }}
      className={css.wrapper}
      key={index}
    >
      <HeadingStory
        className={css.heading}
        isUnderlined
      >
        { heading }
      </HeadingStory>
      <div className={css.content}>
        { component }
      </div>
      <HeadingStory
        className={css.heading}
        isUnderlined
      >
        Code
      </HeadingStory>
      <CodeStory className={css.content} component={code} />
    </div>
  ))

  return (
    <>
      {renderItems()}
    </>
  )
}

export default ComponentRenderTemplateStory

import React, { FC } from 'react'
import HeadingStory from 'stories/HeadingStory/HeadingStory'
import DescriptionStory from 'stories/DescriptionStory/DescriptionStory'
import CodeStory from 'stories/CodeStory/CodeStory'
import LibrariesStory from 'stories/LibrariesStory/LibrariesStory'
import { HeadingTypes } from "components/atoms/Heading/Heading.spec"
import { StoryTemplateProps } from "stories/StoryTemplate/StoryTemplate.spec"

const StoryTemplate: FC<StoryTemplateProps> = ({
  componentName,
  componentDescription,
  references,
  proptypesString,
  defaultPropsString,
  story
}) => {
  return (
    <div style={{width: '100%'}}>
      <HeadingStory
        label={componentName}
        isUnderlined
        extStyles={{
          width: `100%`
        }}
      />
      <div style={{marginTop: `2rem`}}>
        <HeadingStory
          label={`Component description`}
          type={HeadingTypes.H3}
        />
        <DescriptionStory
          extStyles={{
            marginTop: `1rem`
          }}
        >
          { componentDescription }
        </DescriptionStory>
      </div>
      <div style={{marginTop: `2rem`}}>
        <HeadingStory
          label={`Props description`}
          type={HeadingTypes.H3}
        />
        <CodeStory
          code={proptypesString}
        />
      </div>
      {references && (
        <div style={{marginTop: `2rem`}}>
          <HeadingStory
            label={`References`}
            type={HeadingTypes.H3}
          />
          <LibrariesStory data={references} />
        </div>
      )}
      {defaultPropsString && (
        <div style={{marginTop: `2rem`}}>
          <HeadingStory
            label={`Props default values`}
            type={HeadingTypes.H3}
          />
          <CodeStory
            code={defaultPropsString}
          />
        </div>
      )}
      { story() }
    </div>
  )
}

export default StoryTemplate

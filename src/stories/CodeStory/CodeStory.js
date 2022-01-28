import React from 'react'
import css from './CodeStory.module.scss'
import classnames from 'classnames'

const CodeStory = ({
  className,
  code,
  extStyles = {},
  component,
}) => {
  function findAndReplaceStrings (str, substrStart, substrEnd, classToAdd) {
    if (!str) return ``

    let code = str.slice()

    let from = 0

    while (from >= 0 && from < code.length - 1) {
      from = code.indexOf(substrStart, from)

      if (from >= 0) {
        const to = code.indexOf(substrEnd, from)

        const stringWithMarkdown= code.slice(from, to + substrEnd.length)
        const stringContent = code.slice(from + substrStart.length, to)
        code = code.replace(stringWithMarkdown, (`<span class="${classToAdd}">// ${stringContent}</span>`))
        from++
      }
    }

    return code;
  }

  const updateCodeWithCommentsLayout = str => {
    const commentStart = (
      `/*\n  * `
    )
    const commentEnd = (
      `*/\n`
    )

    return findAndReplaceStrings(str, commentStart, commentEnd, css.comment)
  }

  return component
    ? (
      <pre
        className={classnames(css.code, className)}
        style={{
          ...extStyles
        }}
      >
        { component }
      </pre>
    )
    : (
      <pre
        className={classnames(css.code, className)}
        style={{
          ...extStyles
        }}
        dangerouslySetInnerHTML={{ __html: updateCodeWithCommentsLayout(code) }}
      />
    )
}

export default CodeStory

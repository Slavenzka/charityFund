import React, { memo } from 'react'
import css from './LibrariesStory.module.scss'

function LibrariesStory ({
  data
}: {
  data: {
    label: string,
    url: string
  }[]
}) {
  if (!data) return null
  
  const items = data.map(({label, url}) => (
    <li key={url}>
      <a
        href={url}
        className={css.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </li>
  ))
  
  return (
    <ul>
      {items}
    </ul>
  )
}

export default memo(LibrariesStory)
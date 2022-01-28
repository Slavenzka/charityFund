import produce from 'immer'
import { useCallback, useReducer } from 'react'
import { UPDATE_TABLE_SELECTED_ITEMS } from 'store/actions/actionTypes'

const selectOptions = [
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
]

const INITIAL_STATE = {
  date: Date.now(),
  range: {
    from: null,
    to: null
  },
  selectSync: {
    options: selectOptions,
    value: selectOptions[0]
  },
  textarea: `Some content for the textarea field to fill as much space as possible lorem ipsum lalala for the god's sake`,
  table: {
    selection: []
  }
}

const storiesReducer = produce((draft, {type, payload}) => {
  switch (type) {
    case `UPDATE_STORIES_DATE`: {
      draft.date = payload
      return draft
    }
    case `UPDATE_STORIES_RANGE`: {
      const {
        from,
        to
      } = payload
      
      draft.range.from = from
      draft.range.to = to
      return draft
    }
    case `UPDATE_STORIES_SYC_SELECT`: {
      draft.selectSync.value = payload
      return draft
    }
    case `UPDATE_STORIES_TEXTAREA`: {
      draft.textarea = payload
      return draft
    }
    case UPDATE_TABLE_SELECTED_ITEMS: {
      draft.table.selection = payload
      return draft
    }
    default:
      return draft
  }
})

function StoriesStoreProvider ({children}) {
  const [store, dispatch] = useReducer(storiesReducer, INITIAL_STATE)
  
  const updateDate = useCallback(date => {
    dispatch({
      type: `UPDATE_STORIES_DATE`,
      payload: date
    })
  }, [])
  
  const updateRange = useCallback(range => {
    dispatch({
      type: `UPDATE_STORIES_RANGE`,
      payload: range
    })
  }, [])
  
  const updateSelectSync = useCallback(value => {
    dispatch({
      type: `UPDATE_STORIES_SYC_SELECT`,
      payload: value
    })
  }, [])
  
  const updateTextarea = useCallback(value => {
    dispatch({
      type: `UPDATE_STORIES_TEXTAREA`,
      payload: value
    })
  }, [])
  
  return children({
    store,
    updateDate,
    updateRange,
    updateSelectSync,
    updateTextarea
  })
}

export default StoriesStoreProvider


import { memo, useCallback, useMemo } from 'react'
import css from 'components/organisms/ImageInput/ImageInput.module.scss'
import classnames from 'classnames'
import { convertFileAndProcessEncoding } from 'utils'
import ImageInputLabel from 'components/molecules/ImageInputLabel/ImageInputLabel'
import { useDispatch } from 'react-redux'
import { toggleModal } from 'store/actions'
import PropTypes from 'prop-types'

function ImageInput ({
  accept = `.jpg, .jpeg`,
  className,
  error,
  ImagePreview,
  isMultiple = true,
  name,
  onChange,
  value = [],
}) {
  const dispatch = useDispatch()
  
  const codeFiles = useCallback(files => {
    const filesReady = []
  
    const requests = files.reduce((total, file) => {
      const codingRequest = convertFileAndProcessEncoding(file)
        .then(code => {
          filesReady.push({
            content: code,
            name: file.name
          })
        })
      total.push(codingRequest)
      return total
    }, [])
  
    return Promise.all(requests)
      .then(() => {
        return filesReady
      })
  }, [])
  
  const handleChange = useCallback(evt => {
    const files = [...evt.target.files]
    
    codeFiles(files)
      .then(result => {
        onChange([...value, ...result])
      })
  }, [value, onChange, codeFiles])
  
  const handleDeletePreview = useCallback(index => {
    const updatedValue = [...value.slice(0, index), ...value.slice(index + 1)]
    onChange(updatedValue)
  }, [value, onChange])
  
  const handleClickPreview = useCallback((image, name) => {
    dispatch(toggleModal((
      <img
        src={`data:image/jpeg;base64,${image}`}
        className={css.image}
        alt={name}
      />
    ), {
      isContentOnly: true
    }))
  }, [dispatch])
  
  const previews = useMemo(() => {
    const isNotArray = !Array.isArray(value)
    const isEmptyArray = Array.isArray(value) && value.length === 0
    const isWithoutPreview = !ImagePreview
    
    if (!value || isNotArray || isEmptyArray || isWithoutPreview) return null
    
    const items = value.map(({content, name}, index) => (
      <ImagePreview
        image={content}
        name={name}
        onDelete={() => handleDeletePreview(index)}
        handleClickPreview={() => handleClickPreview(content, name)}
        className={css.item}
        key={index}
      />
    ))
    
    return (
      <ul className={css.list}>
        { items }
      </ul>
    )
  }, [value, handleDeletePreview, ImagePreview, handleClickPreview])
  
  return (
    <div className={classnames(css.wrapper, className)}>
      <ImageInputLabel error={error}>
        <input
          onChange={handleChange}
          files={value}
          name={name}
          className={css.input}
          accept={accept}
          multiple={isMultiple}
          type="file"
        />
      </ImageInputLabel>
      { previews }
    </div>
  )
}

ImageInput.propTypes = {
  /*
  * Defines the "accept" property of file input as a string with a list of acceptable file extensions (see defaultProps)
  */
  accept: PropTypes.string,
  /*
  * Optional external class name, that would be added to wrapper div
  */
  className: PropTypes.string,
  /*
  * An error message from form manager
  */
  error: PropTypes.string,
  /*
  * A component that renders image previews of attached files. In case  there is no ImagePreview, not previews would be rendered
  */
  ImagePreview: PropTypes.elementType,
  /*
  * A flag to toggle multiple  files attachment
  */
  isMultiple: PropTypes.bool,
  /*
  * Input field name. An obligatory one in case of react-hook-form management
  */
  name: PropTypes.string,
  /*
  * External change handler, e.g. from react-hook-form Controller
  */
  onChange: PropTypes.func,
  /*
  * Value from external data source
  */
  value: PropTypes.arrayOf(PropTypes.shape({
    /* Base64 encoded image without metadata description, e.g. "data:image/jpeg;base64," */
    content: PropTypes.string,
    name: PropTypes.string
  })),
}

ImageInput.defaultProps = {
  accept: `.jpg, .jpeg`,
  isMultiple: true,
  value: []
}

export default memo(ImageInput)
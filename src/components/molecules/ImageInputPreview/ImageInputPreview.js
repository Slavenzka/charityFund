import { memo } from 'react'
import css from './ImageInputPreview.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import IconClose from 'assets/icons/IconClose'
import PropTypes from 'prop-types'

function ImageInputPreview ({
  className,
  handleClickPreview,
  image,
  imageType = `jpeg`,
  name,
  onDelete,
  TagName = `li`,
}) {
  const extraProps = handleClickPreview
    ? {
      onClick: handleClickPreview
    }
    : {}
  
  return (
    <TagName className={classnames(css.wrapper, className)}>
      <img
        src={`data:image/${imageType};base64, ${image}`}
        className={classnames(css.image, {
          [css.imageClickable]: Boolean(handleClickPreview)
        })}
        alt={name}
        {...extraProps}
      />
      {onDelete && (
        <Button
          onClick={onDelete}
        >
          <IconClose className={css.icon} />
          Remove image file
        </Button>
      )}
    </TagName>
  )
}

ImageInputPreview.propTypes = {
  /*
  * Optional external class name, that would be added to wrapper tag
  */
  className: PropTypes.string,
  /*
  * Optional click handler for the image, e.g. modal with full screen view toggle or smth similar
  */
  handleClickPreview: PropTypes.func,
  /*
  * Base64 encoded image without metadata description, e.g. "data:image/jpeg;base64,"
  */
  image: PropTypes.string,
  /*
  * Image file extension for metadata generation, e.g. "data:image/jpeg;base64,"
  */
  imageType: PropTypes.string,
  /*
  * Content of alt property of the image tag
  */
  name: PropTypes.string,
  /*
  * Optional click handler for delete file button. Button won't be rendered if no handler provided
  */
  onDelete: PropTypes.func,
  /*
  * Tag name for the wrapper tag of the component
  */
  TagName: PropTypes.string,
}

ImageInputPreview.defaultProps = {
  imageType: `jpeg`,
  TagName: `li`
}

export default memo(ImageInputPreview)
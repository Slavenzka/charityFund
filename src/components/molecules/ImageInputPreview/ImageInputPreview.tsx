import { FC, memo } from 'react'
import css from './ImageInputPreview.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import IconClose from 'assets/icons/IconClose'
import { ExtraPropsTypes, ImageInputPreviewProps } from 'components/molecules/ImageInputPreview/ImageInputPreview.spec'

const ImageInputPreview: FC<ImageInputPreviewProps> = ({
  className,
  handleClickPreview,
  image,
  imageType = `jpeg`,
  name,
  onDelete,
  TagName = `li`,
}) => {
  const extraProps: Partial<ExtraPropsTypes> = handleClickPreview
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

export default memo(ImageInputPreview)
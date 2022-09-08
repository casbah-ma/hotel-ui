import PropTypes from 'prop-types'
//styles
import { Tag, StyledIcon, variants } from './CategoryTag.styles'
//icons
import { PlusIcon } from '@heroicons/react/24/solid'
import Paragraph from '@/components/Paragraph'

function CategoryTag({
  categoryName,
  quantity,
  active,
  handleActive,
  variant,
}) {
  return (
    <Tag
      onClick={() => handleActive(categoryName)}
      active={!!(active === categoryName)}
      variant={variant}
    >
      {variant !== 'v2' && (
        <StyledIcon>
          <PlusIcon />
        </StyledIcon>
      )}
      <Paragraph description={`${categoryName} (${quantity})`} />
    </Tag>
  )
}

CategoryTag.propTypes = {
  categoryName: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  active: PropTypes.string.isRequired,
  handleActive: PropTypes.func,
  variant: PropTypes.oneOf(Object.keys(variants)),
}

export default CategoryTag

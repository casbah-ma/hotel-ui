import PropTypes from 'prop-types'
//styles
import { Tag, StyledIcon, variants } from './CategoryTag.styles'
//icons
import { PlusIcon } from '@heroicons/react/24/solid'
import Paragraph from '@/components/Paragraph'

function CategoryTag({ category, active, handleActive, variant }) {
  console.log(active)
  return (
    <Tag
      onClick={() => handleActive(category.type)}
      active={!!(active === category.type)}
      variant={variant}
    >
      {variant !== 'v2' && (
        <StyledIcon>
          <PlusIcon />
        </StyledIcon>
      )}
      <Paragraph description={`${category.type} (${category.quantity})`} />
    </Tag>
  )
}

CategoryTag.propTypes = {
  categoryName: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  handleActive: PropTypes.func,
  variant: PropTypes.oneOf(Object.keys(variants)),
}

export default CategoryTag

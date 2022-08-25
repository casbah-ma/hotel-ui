import PropTypes from 'prop-types'
//styles
import { Category, StyledIcon } from './RoomCategory.styles'
//icons
import { PlusSmIcon } from '@heroicons/react/24/solid'
import Paragraph from '@/components/Paragraph'

function RoomCategory({ categoryName, active, handleActive }) {
  return (
    <Category
      onClick={() => handleActive(categoryName)}
      active={!!(active === categoryName)}
    >
      <StyledIcon>
        <PlusSmIcon />
      </StyledIcon>
      <Paragraph description={categoryName} />
    </Category>
  )
}

RoomCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  handleActive: PropTypes.func,
}

export default RoomCategory

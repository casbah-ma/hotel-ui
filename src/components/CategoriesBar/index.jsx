import PropTypes from 'prop-types'
import { useState } from 'react'
//components
import RoomCategory from './RoomCategory'
//styles
import { CategoriesList } from './CategoriesBar.styles'
import { isEmpty } from '@/helpers/utils'

function CategoriesBar({ categories }) {
  const [active, setActive] = useState(categories[0])
  const handleActive = (category) => {
    setActive(category)
  }

  return (
    <CategoriesList>
      {!isEmpty(categories) &&
        categories.map((category) => (
          <RoomCategory
            key={category}
            categoryName={category}
            handleActive={handleActive}
            active={active}
          />
        ))}
    </CategoriesList>
  )
}

CategoriesBar.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoriesBar

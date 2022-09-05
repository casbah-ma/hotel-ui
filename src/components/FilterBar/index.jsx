import PropTypes from 'prop-types'
import { useState } from 'react'
//components
import CategoryTag from './CategoryTag'
//styles
import { CategoriesList, variants } from './FilterBar.styles'
import { isEmpty } from '@/helpers/utils'

function FilterBar({ categories, variant = 'v1' }) {
  const [active, setActive] = useState(categories[0])
  const handleActive = (category) => {
    setActive(category)
  }

  return (
    <CategoriesList variant={variant}>
      {!isEmpty(categories) &&
        categories.map((category) => (
          <CategoryTag
            key={category}
            categoryName={category}
            handleActive={handleActive}
            active={active}
            variant={variant}
          />
        ))}
    </CategoriesList>
  )
}

FilterBar.propTypes = {
  categories: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(Object.keys(variants)),
}

export default FilterBar

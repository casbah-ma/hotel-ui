import PropTypes from 'prop-types'
import { useState } from 'react'
//components
import CategoryTag from './CategoryTag'
//styles
import { CategoriesList, variants } from './FilterBar.styles'
import { isEmpty } from '@/helpers/utils'

function FilterBar({ categories, variant = 'v1', active, handleActive }) {
  return (
    <CategoriesList variant={variant}>
      {!isEmpty(categories) &&
        categories.map((category) => (
          <CategoryTag
            key={category.type}
            categoryName={category.type}
            handleActive={handleActive}
            active={active}
            variant={variant}
          />
        ))}
    </CategoriesList>
  )
}

FilterBar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      qunatity: PropTypes.number,
    })
  ),
  variant: PropTypes.oneOf(Object.keys(variants)),
}

export default FilterBar

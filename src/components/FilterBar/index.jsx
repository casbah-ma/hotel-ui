import PropTypes from 'prop-types'
//components
import CategoryTag from './CategoryTag'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y } from 'swiper'
//styles
import { CategoriesList, variants } from './FilterBar.styles'
import { isEmpty } from '@/helpers/utils'

function FilterBar({ categories, variant = 'v1', active, handleActive }) {
  return (
    <CategoriesList variant={variant}>
      <Swiper modules={[A11y]} slidesPerView="auto" spaceBetween={32}>
        {!isEmpty(categories) &&
          categories.map((category) => (
            <SwiperSlide key={category.type}>
              <CategoryTag
                categoryName={category.type}
                quantity={category.quantity}
                handleActive={handleActive}
                active={active}
                variant={variant}
              />
            </SwiperSlide>
          ))}
      </Swiper>
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

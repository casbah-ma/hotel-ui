import PropTypes from 'prop-types'
//components
import FilterBar from '@/components/FilterBar'
import RoomCard_v2 from '@/components/Cards/RoomCard_v2'
import Header from '@/components/Header'
import Swiper_v2 from '@/components/Swipers/Swiper_v2'
import { SwiperSlide } from 'swiper/react'
import Button from '@/components/Button'
//styles
import { Container, Wrapper } from './CategoriesFilter_v2.styles'
//helpers
import { isEmpty } from '@/helpers/utils'
import { useState } from 'react'

function CategoriesFilter_v2({ categories, headerProps, actionProps }) {
  //handle active category
  const [active, setActive] = useState('All')
  const handleActive = (category) => {
    setActive(category)
  }
  //function to get all types and how many rooms they have
  const getTypes = (categories) => {
    categories.length
    const types = []
    categories.forEach((category) => {
      let index = types.findIndex(
        (_category) => _category.type === category.type
      )
      if (index === -1) {
        //add the category if doesn't exist
        types.push({ type: category.type, quantity: 1 })
      } else {
        //increase the quantity if it does exist
        types[index].quantity = types[index].quantity + 1
      }
    })
    types.unshift({ type: 'All', quantity: categories.length })
    return types
  }

  //filter
  const filteredCategories = categories.filter((category) =>
    active === 'All' ? true : category.type === active
  )
  return (
    <Container>
      <Wrapper>
        <Header {...headerProps} />
        <FilterBar
          active={active}
          handleActive={handleActive}
          categories={getTypes(categories)}
          variant="v2"
        />
      </Wrapper>
      <Swiper_v2 navigation={true}>
        {!isEmpty(filteredCategories) &&
          filteredCategories.map((category, index) => (
            <SwiperSlide key={index}>
              <RoomCard_v2
                title={category.name}
                subtitle={category.subtitle}
                actionProps={actionProps}
                text={category.description}
              />
            </SwiperSlide>
          ))}
      </Swiper_v2>
    </Container>
  )
}

CategoriesFilter_v2.propTypes = {
  headerProps: PropTypes.shape(Header.propTypes),
  actionProps: PropTypes.shape(Button.prototype),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      subtitle: PropTypes.string.isRequired,
    })
  ),
}

export default CategoriesFilter_v2

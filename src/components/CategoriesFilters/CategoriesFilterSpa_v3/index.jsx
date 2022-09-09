import PropTypes from 'prop-types'
//components
import FilterBar from '@/components/FilterBar'
import RoomCard_v3 from '@/components/Cards/RoomCard_v3'
import Header from '@/components/Header'
import Swiper_v2 from '@/components/Swipers/Swiper_v2'
import { SwiperSlide } from 'swiper/react'
import Paragraph from '@/components/Paragraph'
import Button from '@/components/Button'
//styles
import { Container, Wrapper } from './CategoriesFilterSpa_v3.styles'
//helpers
import { isEmpty } from '@/helpers/utils'
import { useState } from 'react'

function CategoriesFilterSpa_V3({
  categories,
  headerProps,
  actionProps,
  link,
}) {
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
          variant="v3"
        />
      </Wrapper>
      <Swiper_v2>
        {!isEmpty(filteredCategories) &&
          filteredCategories.map((category, index) => (
            <SwiperSlide key={index}>
              <RoomCard_v3
                name={category.name}
                subtitle={category.subtitle}
                link={category.link}
                actionProps={actionProps}
                href={category.href}
                link={link}
              >
                <Paragraph description={category.description} fontSize="sm" />
              </RoomCard_v3>
            </SwiperSlide>
          ))}
      </Swiper_v2>
    </Container>
  )
}

CategoriesFilterSpa_V3.propTypes = {
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

export default CategoriesFilterSpa_V3

import PropTypes from 'prop-types'
//components
import FilterBar from '@/components/FilterBar'
import RoomCard_v3 from '@/components/Cards/RoomCard_v3'
import Header from '@/components/Header'
import InfoItems from '../../InfoItems'
import Swiper_v2 from '@/components/Swipers/Swiper_v2'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container, Wrapper } from './CategoriesFilter_v3.styles'
//helpers
import { isEmpty } from '@/helpers/utils'
import { useState } from 'react'

function CategoriesFilter_v3({ categories, headerProps }) {
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

  //function to get infos
  const getInfos = (category) => {
    return Object.entries(category)
      .filter((item) => !(item[0] === 'imageSrc' || item[0] === 'subtitle'))
      .map((item) => ({
        infoName: item[0],
        infoValue: item[1],
      }))
  }
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
                imageSrc={category.imageSrc}
                name={category.name}
                subtitle={category.subtitle}
              >
                <InfoItems infos={getInfos(category)} space={false} />
              </RoomCard_v3>
            </SwiperSlide>
          ))}
      </Swiper_v2>
    </Container>
  )
}

CategoriesFilter_v3.propTypes = {
  headerProps: PropTypes.shape(Header.propTypes),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageSrc: PropTypes.string,
      subtitle: PropTypes.string.isRequired,
      sq_M: PropTypes.string.isRequired,
      guests: PropTypes.string.isRequired,
    })
  ),
}

export default CategoriesFilter_v3

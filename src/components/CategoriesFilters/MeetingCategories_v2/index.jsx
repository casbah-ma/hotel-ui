import PropTypes from 'prop-types'
//components
import FilterBar from '@/components/FilterBar'
import RoomCard from '@/components/Cards/RoomCard'
import Header from '@/components/Header'
import InfoItems from '../../InfoItems'
import Swiper_v2 from '@/components/Swipers/Swiper_v2'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container, Wrapper } from './MeetingCategories_v2.styles'
//helpers
import { isEmpty } from '@/helpers/utils'
import { useState } from 'react'

function MeetingCategories_v2({ categories, headerProps }) {
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
  //function to get the arrray infos from the data
  const getInfos = (category) => {
    return Object.entries(category)
      .filter((item) => !(item[0] === 'image' || item[0] === 'subtitle'))
      .map((item) => ({
        infoName: item[0],
        infoValue: item[1],
      }))
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
          categories={getTypes(categories)}
          variant="v2"
          active={active}
          handleActive={handleActive}
        />
      </Wrapper>
      <Swiper_v2 navigation={true}>
        {!isEmpty(filteredCategories) &&
          filteredCategories.map((category, index) => (
            <SwiperSlide key={index}>
              <RoomCard
                image={category.image}
                title={category.name}
                subtitle={category.subtitle}
                variant="v2"
              >
                <InfoItems infos={getInfos(category)} />
              </RoomCard>
            </SwiperSlide>
          ))}
      </Swiper_v2>
    </Container>
  )
}

MeetingCategories_v2.propTypes = {
  headerProps: PropTypes.shape(Header.propTypes),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.shape({
        variant: PropTypes.string,
        src: PropTypes.string,
      }),
      subtitle: PropTypes.string.isRequired,
      sq_M: PropTypes.string.isRequired,
      guests: PropTypes.string.isRequired,
    })
  ),
}

export default MeetingCategories_v2

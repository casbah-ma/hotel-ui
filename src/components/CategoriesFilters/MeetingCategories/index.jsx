import PropTypes from 'prop-types'
//components
import FilterBar from '@/components/FilterBar'
import RoomCard from '@/components/Cards/RoomCard'
import Header from '@/components/Header'
import InfoItems from '@/components/InfoItems'
import Swiper from '@/components/Swipers/Swiper'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container } from './MeetingCategories.styles'
//helpers
import { isEmpty } from '@/helpers/utils'
import { useState } from 'react'

function MeetingCategories({ categories, headerProps, link }) {
  console.log(categories)
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
      .filter(
        (item) =>
          !(item[0] === 'image' || item[0] === 'subtitle' || item[0] === 'href')
      )
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
      <Header {...headerProps} />
      <FilterBar
        categories={getTypes(categories)}
        variant="v1"
        active={active}
        handleActive={handleActive}
      />
      <Swiper type="card">
        {!isEmpty(filteredCategories) &&
          filteredCategories.map((category, index) => (
            <SwiperSlide key={index} className="lg:w-[25rem]">
              <RoomCard
                image={category.image}
                title={category.name}
                subtitle={category.subtitle}
                variant="v1"
                href={category.href}
                link={link}
              >
                <InfoItems infos={getInfos(category)} />
              </RoomCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

MeetingCategories.propTypes = {
  categories: PropTypes.shape(FilterBar.propTypes),
  headerProps: PropTypes.shape(Header.propTypes),
  filteredCategories: PropTypes.arrayOf(
    PropTypes.shape({
      ...RoomCard.propTypes,
      ...InfoItems.propTypes,
    })
  ),
}

export default MeetingCategories

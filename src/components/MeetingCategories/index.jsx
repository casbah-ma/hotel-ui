import PropTypes from 'prop-types'
//components
import FilterBar from '@/components/FilterBar'
import RoomCard from '@/components/Cards/RoomCard'
import Header from '@/components/Header'
import InfoItems from '../InfoItems'
import Swiper from '@/components/Swipers/Swiper'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container } from './MeetingCategories.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function MeetingCategories({ categories, headerProps, categoriesDetails }) {
  return (
    <Container>
      <Header {...headerProps} />
      <FilterBar categories={categories} />
      <Swiper type="card">
        {!isEmpty(categoriesDetails) &&
          categoriesDetails.map((category, index) => (
            <SwiperSlide key={index} className="lg:w-[25rem]">
              <RoomCard {...category.roomCard}>
                <InfoItems infos={category.infoDeatails} />
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
  categoriesDetails: PropTypes.arrayOf(
    PropTypes.shape({
      ...RoomCard.propTypes,
      ...InfoItems.propTypes,
    })
  ),
}

export default MeetingCategories

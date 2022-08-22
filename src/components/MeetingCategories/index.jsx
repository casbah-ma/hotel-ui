import PropTypes from 'prop-types'
//components
import CategoriesBar from '@/components/CategoriesBar'
import RoomCard from '@/components/Cards/RoomCard'
import Header from '@/components/Header'
import InfoItems from '../InfoItems'
import Swiper from '@/components/Swiper'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container } from './MeetingCategories.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function MeetingCategories({ categories, headerProps, categoriesDetails }) {
  console.log(categoriesDetails)
  return (
    <Container>
      <Header {...headerProps} />
      <CategoriesBar categories={categories} />
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
  categories: PropTypes.shape(CategoriesBar.propTypes),
  headerProps: PropTypes.shape(Header.propTypes),
  categoriesDetails: PropTypes.arrayOf(
    PropTypes.shape({
      ...RoomCard.propTypes,
      ...InfoItems.propTypes,
    })
  ),
}

export default MeetingCategories

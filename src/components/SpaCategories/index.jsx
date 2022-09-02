import PropTypes from 'prop-types'
//components
import Paragraph from '@/components/Paragraph'
import FilterBar from '@/src/components/FilterBar'
import RoomCard from '@/components/Cards/RoomCard'
import Header from '@/components/Header'
import Swiper from '@/components/Swipers/Swiper'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container } from './SpaCategories.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function SpaCategories({ barProps, headerProps, categoriesDetails }) {
  return (
    <Container>
      <Header {...headerProps} />
      <FilterBar {...barProps} />
      <Swiper type="card">
        {!isEmpty(categoriesDetails) &&
          categoriesDetails.map((category, index) => (
            <SwiperSlide key={index} className="md:w-[25rem]">
              <RoomCard {...category.roomCard}>
                <Paragraph {...category.paragraph} />
              </RoomCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

SpaCategories.propTypes = {
  barProps: PropTypes.shape(FilterBar.propTypes),
  headerProps: PropTypes.shape(Header.propTypes),
  categoriesDetails: PropTypes.arrayOf(
    PropTypes.shape({
      ...RoomCard.propTypes,
      ...Paragraph.propTypes,
    })
  ),
}

export default SpaCategories

import PropTypes from 'prop-types'
//components
import Paragraph from '@/components/Paragraph'
import CategoriesBar from '@/components/CategoriesBar'
import RoomCard from '@/components/Cards/RoomCard'
import Header from '@/components/Header'
import Swiper from '@/components/Swiper'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container } from './SpaCategories.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function SpaCategories({ barProps, headerProps, categoriesDetails }) {
  return (
    <Container>
      <Header {...headerProps} />
      <CategoriesBar {...barProps} />
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
  barProps: PropTypes.shape(CategoriesBar.propTypes),
  headerProps: PropTypes.shape(Header.propTypes),
  categoriesDetails: PropTypes.arrayOf(
    PropTypes.shape({
      ...RoomCard.propTypes,
      ...Paragraph.propTypes,
    })
  ),
}

export default SpaCategories

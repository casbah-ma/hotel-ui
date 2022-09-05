import PropTypes from 'prop-types'
//components
import FilterBar from '@/components/FilterBar'
import RoomCard_v2 from '@/components/Cards/RoomCard_v2'
import Header from '@/components/Header'
import Swiper_v2 from '@/components/Swipers/Swiper_v2'
import { SwiperSlide } from 'swiper/react'
import Paragraph from '@/components/Paragraph'
import Button from '@/components/Button'
//styles
import { Container, Wrapper } from './CategoriesFilter_v2.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function CategoriesFilter_v2({ categories, headerProps, actionProps }) {
  const types = categories.map((obejct) => obejct.type)
  return (
    <Container>
      <Wrapper>
        <Header {...headerProps} />
        <FilterBar categories={types} variant="v2" />
      </Wrapper>
      <Swiper_v2 navigation={true}>
        {!isEmpty(categories) &&
          categories.map((category, index) => (
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

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
import { Container, Wrapper } from './CategoriesFilterSpa_V3.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function CategoriesFilterSpa_V3({ categories, headerProps, actionProps }) {
  const types = categories.map((obejct) => obejct.type)
  return (
    <Container>
      <Wrapper>
        <Header {...headerProps} />
        <FilterBar categories={types} variant="v3" />
      </Wrapper>
      <Swiper_v2>
        {!isEmpty(categories) &&
          categories.map((category, index) => (
            <SwiperSlide key={index}>
              <RoomCard_v3
                name={category.name}
                subtitle={category.subtitle}
                actionProps={actionProps}
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

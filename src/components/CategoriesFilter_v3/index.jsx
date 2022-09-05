import PropTypes from 'prop-types'
//components
import FilterBar from '@/components/FilterBar'
import RoomCard_v3 from '@/components/Cards/RoomCard_v3'
import Header from '@/components/Header'
import InfoItems from '../InfoItems'
import Swiper_v2 from '@/components/Swipers/Swiper_v2'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container, Wrapper } from './CategoriesFilter_v3.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function CategoriesFilter_v3({ categories, headerProps }) {
  const types = categories.map((obejct) => obejct.type)
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
        <FilterBar categories={types} variant="v3" />
      </Wrapper>
      <Swiper_v2>
        {!isEmpty(categories) &&
          categories.map((category, index) => (
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

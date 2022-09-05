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

function MeetingCategories_v2({ categories, headerProps }) {
  const types = categories.map((obejct) => obejct.type)
  const getInfos = (category) => {
    return Object.entries(category)
      .filter((item) => !(item[0] === 'image' || item[0] === 'subtitle'))
      .map((item) => ({
        infoName: item[0],
        infoValue: item[1],
      }))
  }
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

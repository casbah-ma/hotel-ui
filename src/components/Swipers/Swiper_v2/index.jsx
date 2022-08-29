import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { SwiperContainer, SwiperHeader } from './Swiper.styles'
import Card_v2 from '@/components/Cards/Card_v2'
import * as CardProps from '@/components/Cards/Card_v2/Card.stories'
import { useBreakpoint } from '@/hooks'
import Header from '@/components/Header'
import { isEmpty } from '@/helpers/utils'
import PropTypes from 'prop-types'

function Swiper_v2({ header, navigation, children }) {
  const bp = useBreakpoint()
  return (
    <SwiperContainer role="slider">
      <SwiperHeader>{!isEmpty(header) && <Header {...header} />}</SwiperHeader>
      <Swiper
        slidesPerView={bp === 'xs' ? 1 : 'auto'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={!!navigation}
        modules={[Navigation, Autoplay]}
        className="mySwiper_v2"
      >
        {children}
      </Swiper>
    </SwiperContainer>
  )
}

Swiper_v2.propTypes = {}

export default Swiper_v2

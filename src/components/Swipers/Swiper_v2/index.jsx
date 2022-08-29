import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import PropTypes from 'prop-types'
import { SwiperContainer } from './Swiper.styles'
import Card_v2 from '../../Cards/Card_v2'
import * as CardProps from '../../Cards/Card_v2/Card.stories'
import { useBreakpoint } from '@/hooks'

function Swiper_v2({ variant, navigation, data }) {
  const bp = useBreakpoint()
  return (
    <SwiperContainer>
      <Swiper
        slidesPerView={bp === 'xs' ? 1 : 'auto'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Navigation, Autoplay]}
        className="mySwiper_v2"
      >
        <SwiperSlide>
          <Card_v2 {...CardProps.Medium.args} />
        </SwiperSlide>
        <SwiperSlide>
          <Card_v2 {...CardProps.Small.args} />
        </SwiperSlide>
        <SwiperSlide>
          <Card_v2 {...CardProps.Small.args} />
        </SwiperSlide>
        <SwiperSlide>
          <Card_v2 {...CardProps.Medium.args} />
        </SwiperSlide>
        <SwiperSlide>
          <Card_v2 {...CardProps.Small.args} />
        </SwiperSlide>
        <SwiperSlide>
          <Card_v2 {...CardProps.Small.args} />
        </SwiperSlide>
        <SwiperSlide>
          <Card_v2 {...CardProps.Large.args} />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  )
}

Swiper_v2.propTypes = {}

export default Swiper_v2

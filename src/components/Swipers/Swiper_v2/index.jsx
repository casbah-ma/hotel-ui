import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import PropTypes from 'prop-types'
import { SwiperContainer } from './Swiper.styles'
import 'swiper/css'
import 'swiper/css/navigation'
import './styles.css'
import Card_v2 from '../../Cards/Card_v2'
import * as CardProps from '../../Cards/Card_v2/Card.stories'

function Swiper_v2({ variant, navigation, data }) {
  return (
    <SwiperContainer>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
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
          <Card_v2 {...CardProps.Medium.args} />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </SwiperContainer>
  )
}

Swiper_v2.propTypes = {}

export default Swiper_v2

import { Swiper } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import {
  SwiperContainer,
  SwiperHeader,
  SwiperContent,
  SwiperButton,
  SwiperButtonsContainer,
} from './Swiper.styles'
import { useBreakpoint } from '@/hooks'
import Header from '@/components/Header'
import { isEmpty } from '@/helpers/utils'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Next, Prev } from '@/components/Icons'

function Swiper_v3({ header, autoplay = true, children }) {
  const [swiperRef, setSwiperRef] = useState(null)
  const bp = useBreakpoint()

  return (
    <SwiperContainer role="slider">
      <SwiperContent>
        <SwiperHeader>
          {!isEmpty(header) && <Header {...header} />}
        </SwiperHeader>
        <SwiperButtonsContainer>
          <SwiperButton onClick={() => swiperRef.slidePrev()}>
            <Prev width="24px" height="24px" />
          </SwiperButton>
          <SwiperButton onClick={() => swiperRef.slideNext()}>
            <Next width="24px" height="24px" />
          </SwiperButton>
        </SwiperButtonsContainer>
      </SwiperContent>
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        slidesPerView={bp === 'xs' ? 1 : 'auto'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={autoplay && [Autoplay]}
        className="mySwiper_v3"
      >
        {children}
      </Swiper>
    </SwiperContainer>
  )
}

Swiper_v3.propTypes = {
  header: PropTypes.shape(Header.propTypes),
  Autoplay: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Swiper_v3

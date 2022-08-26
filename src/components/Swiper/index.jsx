import { useBreakpoint } from '@/hooks'
import Header from '@/components/Header'
import { SwiperContainer } from './Swiper.styles'
import { Swiper as SwiperCore } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { isEmpty } from '@/helpers/utils'

const getSlidesNumber = (bp) => {
  switch (bp) {
    case 'sm':
      return 1
    case 'md':
      return 2
    case 'lg':
      return 'auto'
    default:
      return 'auto'
  }
}

const Swiper = function ({ header, children }) {
  const bp = useBreakpoint()
  return (
    <SwiperContainer role="slider">
      {!isEmpty(header) && <Header {...header} />}
      <SwiperCore
        slidesPerView={getSlidesNumber(bp)}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {children}
      </SwiperCore>
    </SwiperContainer>
  )
}

export default Swiper

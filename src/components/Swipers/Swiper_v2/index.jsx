import { Swiper } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { SwiperContainer, SwiperHeader, SwiperContent } from './Swiper.styles'
import { useBreakpoint } from '@/hooks'
import Header from '@/components/Header'
import { isEmpty } from '@/helpers/utils'
import PropTypes from 'prop-types'

function Swiper_v2({ header, navigation, children }) {
  const bp = useBreakpoint()
  return (
    <SwiperContainer role="slider">
      <SwiperHeader>{!isEmpty(header) && <Header {...header} />}</SwiperHeader>
      <SwiperContent>
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
      </SwiperContent>
    </SwiperContainer>
  )
}

Swiper_v2.propTypes = {
  header: PropTypes.shape(Header.propTypes),
  navigation: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Swiper_v2

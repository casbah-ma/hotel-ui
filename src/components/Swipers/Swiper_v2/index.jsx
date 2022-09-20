import { Swiper } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import {
  SwiperContainer,
  SwiperInfo,
  SwiperContent,
  SwiperNavigation,
  SwiperButton,
} from './Swiper.styles'
import { useBreakpoint } from '@/hooks'
import Header from '@/components/Header'
import { isEmpty } from '@/helpers/utils'
import PropTypes from 'prop-types'
import { ChevronRight, ChevronLeft } from '@/components/Icons'
import { useState } from 'react'

function Swiper_v2({ header, navigation, children, autoplay }) {
  const bp = useBreakpoint()
  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <SwiperContainer role="slider" header={!!header}>
      <SwiperInfo>
        {!isEmpty(header) && <Header {...header} />}
        {navigation && bp === 'lg' && (
          <SwiperNavigation header={isEmpty(header)}>
            <SwiperButton onClick={() => swiperRef.slidePrev()}>
              <ChevronLeft width="18" height="18" />
            </SwiperButton>
            <SwiperButton onClick={() => swiperRef.slideNext()}>
              <ChevronRight width="18" height="18" />
            </SwiperButton>
          </SwiperNavigation>
        )}
      </SwiperInfo>
      <SwiperContent>
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
          slidesPerView={bp === 'xs' ? 1 : 'auto'}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
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
  autoplay: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Swiper_v2

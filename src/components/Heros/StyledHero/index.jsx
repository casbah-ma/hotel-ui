import Image from 'next/image'
import PropTypes from 'prop-types'
import BookingBar_v2 from '../../Bookings/BookingBar_v2'
import Paragraph from '../../Paragraph'
import Title from '../../Title'
import {
  StyledHeroChildren,
  StyledHeroContainer,
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroSubtitle,
  StyledHeroTitle,
} from './StyledHero.styles'
import { useState } from 'react'
import { useBreakpoint } from '@/hooks'

const getImageSize = (bp) => {
  switch (bp) {
    case 'xs':
      return 'fill'
    case 'sm':
      return 'fill'
    case 'md':
      return 'fill'
    case 'lg':
      return ''
    default:
      return ''
  }
}

function StyledHero({ title, subtitle, children, image }) {
  const [dates, setDates] = useState({ startDate: null, endDate: null })
  const bp = useBreakpoint()
  const [guestValues, setGuestValues] = useState({
    adults: 1,
    kids: 0,
  })
  // handle dates change
  const onDatesChange = (dates) => {
    setDates(dates)
  }
  // handle guest values change
  const onGuestChange = (type, value) => {
    setGuestValues({ ...guestValues, [type]: value })
  }
  return (
    <StyledHeroContainer data-testid="hero-container">
      <StyledHeroContent>
        <StyledHeroTitle>
          <Title level="1" title={title} />
        </StyledHeroTitle>
        <StyledHeroSubtitle>
          <Paragraph fontSize="sm" description={subtitle} />
        </StyledHeroSubtitle>
      </StyledHeroContent>
      <StyledHeroImage>
        <Image
          style={{ borderRadius: '10px' }}
          alt="imageHero"
          src={image}
          width={720}
          height={821}
          layout={getImageSize(bp)}
          objectFit="cover"
        />
      </StyledHeroImage>
      <StyledHeroChildren>
        <BookingBar_v2
          bookingTitle={{
            title_1: 'Checkin - checkout',
            title_2: 'Guests',
          }}
          dates={dates}
          guestValues={guestValues}
          onDatesChange={onDatesChange}
          onGuestChange={onGuestChange}
          buttonProps={{
            text: 'Check Availability',
          }}
        />
      </StyledHeroChildren>
    </StyledHeroContainer>
  )
}

StyledHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export default StyledHero

import Image from 'next/image'
import PropTypes from 'prop-types'
import BookingBar_v2 from '@/components/Bookings/BookingBar_v2'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
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
  const bp = useBreakpoint()
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
      <StyledHeroChildren>{children}</StyledHeroChildren>
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

import {
  HeroContainer,
  HeroInfo,
  HeroDescription,
  HeroAction,
  HeroImage,
} from './AnimatedHero.styles'
import Title from '@/components/Title'
import Paragraph from '@/components/Paragraph'
import propTypes from 'prop-types'
import Image from 'next/image'

const AnimatedHero = function ({ image, title, description, children }) {
  return (
    <HeroContainer>
      <HeroImage>
        <Image alt="hero" src={image} layout="fill" />
      </HeroImage>
      <HeroInfo data-aos="fade-right">
        <Title level="2" title={title} color="white" />
        <HeroDescription>
          <Paragraph description={description} />
        </HeroDescription>
      </HeroInfo>
      <HeroAction>{children}</HeroAction>
    </HeroContainer>
  )
}

AnimatedHero.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

export default AnimatedHero

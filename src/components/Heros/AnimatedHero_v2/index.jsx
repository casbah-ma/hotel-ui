import Image from 'next/image'
import PropTypes from 'prop-types'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import {
  AnimatedHeroContainer,
  AnimatedHeroImage,
  AnimatedHeroContent,
  AnimatedHeroChildrens,
  AnimatedHeroButton,
} from './AnimatedHero.styles'

function AnimatedHero_v2({ image, title, subtitle, children }) {
  return (
    <AnimatedHeroContainer>
      <AnimatedHeroImage>
        <Image
          style={{ borderRadius: '8px' }}
          alt="hero"
          src={image}
          layout="fill"
          objectFit="cover"
        />
      </AnimatedHeroImage>
      <AnimatedHeroChildrens>
        <AnimatedHeroContent>
          <Title title={title} color="white" level="2" />
          <Paragraph description={subtitle} color="white" />
        </AnimatedHeroContent>
        <AnimatedHeroButton>{children}</AnimatedHeroButton>
      </AnimatedHeroChildrens>
    </AnimatedHeroContainer>
  )
}

AnimatedHero_v2.propTypes = {}

export default AnimatedHero_v2

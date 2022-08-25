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
  AnimatedHeroButtonText,
} from './AnimatedHero.styles'
import { StyledArrow } from '@/components/Icons'

function AnimatedHero_v2({ image, title, subtitle, clickTitle, children }) {
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
        <AnimatedHeroButton>
          {children}
          {clickTitle && (
            <AnimatedHeroButtonText>
              <StyledArrow width="89" height="89" color="white" />
              Click me to play
            </AnimatedHeroButtonText>
          )}
        </AnimatedHeroButton>
      </AnimatedHeroChildrens>
    </AnimatedHeroContainer>
  )
}

AnimatedHero_v2.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  clickTitle: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default AnimatedHero_v2

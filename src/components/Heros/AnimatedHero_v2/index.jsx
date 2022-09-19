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
  AnimatedHeroVideo,
  AnimatedHeroTitle,
} from './AnimatedHero_v2.styles'
import { StyledArrow } from '@/components/Icons'
import { isVideoUrl } from '@/helpers/utils'

function AnimatedHero_v2({
  image,
  title,
  subtitle,
  clickTitle,
  children,
  position,
  gradient,
  playVideo = true,
}) {
  return (
    <AnimatedHeroContainer position={position} gradient={gradient}>
      <AnimatedHeroImage>
        {isVideoUrl(image) ? (
          <AnimatedHeroVideo loop muted autoPlay={playVideo}>
            <source src={image} type="video/mp4" />
          </AnimatedHeroVideo>
        ) : (
          <Image
            style={{
              borderRadius: '8px',
            }}
            alt="hero"
            src={image}
            layout="fill"
            objectFit="cover"
          />
        )}
      </AnimatedHeroImage>
      <AnimatedHeroChildrens position={position}>
        <AnimatedHeroContent position={position}>
          <Title title={title} color="white" level="2" />
          <AnimatedHeroTitle position={position}>
            <Paragraph description={subtitle} color="white" />
          </AnimatedHeroTitle>
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
  position: PropTypes.string,
  gradient: PropTypes.bool,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  clickTitle: PropTypes.bool,
  children: PropTypes.node,
}

export default AnimatedHero_v2

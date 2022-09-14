import Title from '@/components/Title'
import {
  HeroAction,
  HeroContainer,
  HeroImage,
  HeroInfo,
  HeroSubtitle,
  HeroTitle,
} from './Hero.styles'
import Label from '@/components/Label'
import { useBreakpoint } from '@/hooks'
import Image from 'next/image'
import PropTypes from 'prop-types'
import theme from '@/components/../../theme'

const Hero = function ({
  position,
  gradient,
  withBorder,
  title,
  subtitle,
  children,
  image,
}) {
  const bp = useBreakpoint()
  return (
    <HeroContainer
      gradient={gradient}
      position={position}
      data-testid="hero-container"
    >
      <HeroImage>
        <Image
          role="img"
          alt="hero"
          src={image}
          layout="fill"
          objectFit="cover"
        />
      </HeroImage>
      <HeroInfo position={position}>
        <HeroTitle position={position} withBorder={withBorder}>
          <Title level="1" title={title} color={theme.colors.text.secondary} />
        </HeroTitle>
        <HeroSubtitle position={position}>
          <Label
            fontSize={bp}
            labelText={subtitle}
            color={theme.colors.text.secondary}
          />
        </HeroSubtitle>
      </HeroInfo>
      <HeroAction position={position}>{children}</HeroAction>
    </HeroContainer>
  )
}

Hero.propTypes = {
  position: PropTypes.string,
  gradient: PropTypes.bool,
  withBorder: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Hero

import Title from '@/components/Title'
import { HeroAction, HeroContainer, HeroImage, HeroInfo } from './Hero.styles'
import Label from '@/components/Label'
import { useBreakpoint } from '@/hooks'
import Image from 'next/image'

const Hero = function ({ title, subtitle, children, image }) {
  const bp = useBreakpoint()
  return (
    <HeroContainer data-testid="hero-container">
      <HeroImage>
        <Image role="img" alt="hero" src={image} layout="fill" />
      </HeroImage>
      <HeroInfo>
        <Title level="1" title={title} />
        <Label fontSize={bp} labelText={subtitle} />
      </HeroInfo>
      <HeroAction>{children}</HeroAction>
    </HeroContainer>
  )
}

export default Hero

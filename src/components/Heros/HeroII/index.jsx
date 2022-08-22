import Title from '@/components/Title'
import { HeroAction, HeroContainer, HeroImage, HeroInfo } from './HeroII.styles'
import Label from '@/components/Label'
import Image from 'next/image'

const HeroII = function ({ title, subtitle, children, image }) {
  return (
    <>
      <HeroContainer data-testid="hero-container">
        <HeroImage>
          <Image role="img" alt="hero" src={image} layout="fill" />
        </HeroImage>
        <HeroInfo>
          <Title level="1" title={title} />
          <Label fontSize="md" labelText={subtitle} />
        </HeroInfo>
      </HeroContainer>
      <HeroAction>{children}</HeroAction>
    </>
  )
}

export default HeroII

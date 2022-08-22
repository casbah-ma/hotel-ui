import { getImage } from '@/styles/helpers'
import tw, { styled } from 'twin.macro'

export const HeroContainer = tw.div`
  w-full h-[51.313rem] mb-auto relative bg-gradient-to-b from-transparent to-white
`

export const HeroImage = styled.div(({ src }) => [
  `filter: brightness(.9) !important;
  `,
  tw`
    w-full h-full bg-no-repeat bg-cover object-cover bg-center brightness-50 opacity-20
    mix-blend-lighten 
    `,
])

export const HeroInfo = tw.div`
    w-full absolute top-[19.563rem] gap-3
    flex flex-col justify-center items-center
`

export const HeroAction = styled.div`
  ${tw`
    w-full  animate-bounce relative -top-64 left-0 mx-auto
    flex justify-center items-center 
  `}
  animation: fadeInBottom 1.5s both;
  @keyframes fadeInBottom{
    0%{
      opacity: 0;
      transform: translateY(50px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
  }
`

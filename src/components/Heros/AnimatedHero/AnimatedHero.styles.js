import tw, { styled } from 'twin.macro'

export const HeroContainer = styled.div`
  ${tw`
 w-full h-[50rem] lg:h-[42.125rem]
object-cover bg-no-repeat  bg-center rounded-lg
relative
`}
`
export const HeroImage = styled.div(({}) => [
  `filter: brightness(0.5) !important;`,
  tw`
  w-full h-full bg-no-repeat bg-cover object-cover bg-center brightness-50`,
])

export const HeroInfo = styled.div`
${tw`
    absolute top-24 left-9 
    md:left-[5rem] w-[14rem] sm:w-[19.125rem] md:w-[37.5rem] 
    lg:top-[5.5rem] lg:left-[7.5rem]
    `}
    animation: fadeInLeft 1.5s both;
    @keyframes fadeInLeft{
      0%{
        opacity: 0;
        transform: translateX(-50px);
      }
      100%{
        opacity: 1;
        transform: translateX(0);
    }
`
export const HeroTitle = tw.div`md:font-bold`

export const HeroDescription = styled.div`
  ${tw`
    w-full h-full lg:w-5/6  
    text-white  absolute top-[25rem] lg:top-[21.875rem]
  `}
`
export const HeroAction = styled.div`
  ${tw`
    animate-bounce absolute bottom-10 lg:bottom-20 right-10 lg:right-32
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

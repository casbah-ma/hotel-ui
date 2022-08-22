import tw, { styled } from 'twin.macro'

export const HeroContainer = styled.div`
  ${tw`
  w-full h-[50rem] md:h-screen  relative
`}
`

export const HeroImage = styled.div(({ src }) => [
  `filter: brightness(.7) !important;`,
  tw`
    w-full h-full bg-no-repeat bg-cover object-cover bg-center brightness-50 opacity-20
    `,
])

export const HeroInfo = tw.div`
    w-full absolute xs:bottom-[20.25rem] sm:bottom-[50.25rem]  md:bottom-[24.25rem] text-center
    flex flex-col justify-center items-center gap-6 `

export const HeroAction = styled.div`
  ${tw`
    w-full animate-bounce absolute bottom-[1.5rem] md:bottom-[6.5rem]
    px-2 flex justify-center items-center
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

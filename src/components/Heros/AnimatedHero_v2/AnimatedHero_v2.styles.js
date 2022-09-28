import tw, { styled } from 'twin.macro'

export const AnimatedHeroContainer = styled.div(({ position, gradient }) => [
  tw`w-full h-[38.188rem] lg:h-[41.438rem] rounded-lg object-cover bg-no-repeat bg-center relative `,
  gradient &&
    `background: linear-gradient(180deg, #000000 12.97%, rgba(0, 0, 0, 0) 100%);`,
  gradient && tw`text-white`,
])

export const AnimatedHeroImage = tw.div`w-full h-full bg-no-repeat object-cover brightness-50 mix-blend-darken `

export const AnimatedHeroChildrens = styled.div(({ position }) => [
  tw`absolute w-full h-full flex flex-col items-center justify-start top-[4.5rem] sm:top-[2.5rem] md:top-[4.313rem] lg:top-[10.063rem] gap-10 text-white`,
  position === 'start' &&
    tw`items-start justify-start  lg:top-0 pl-[1rem] sm:pl-[1.5rem] md:pl-[5.5rem]`,
])

export const AnimatedHeroContent = styled.div(({ position }) => [
  tw`xs:w-[17rem] sm:w-[20.563rem] md:w-[30.063rem] lg:w-[48.875rem] text-center  text-sm h-1/2 lg:h-1/3 flex flex-col items-center justify-around gap-y-10`,
  position === 'start' && tw`items-start text-left  lg:pt-[16rem]`,
])

export const AnimatedHeroTitle = styled.div(({ position }) => [
  position === 'start' && tw`lg:w-[37.5rem]`,
])

export const AnimatedHeroButtonText = styled.span(({ theme }) => [
  `font-family: ${theme.fontFamily.indie};`,
  tw`w-[157px] absolute -top-3 pl-4 md:pl-16 text-white text-center md:text-2xl font-normal -rotate-6`,
])

export const AnimatedHeroVideo = tw.video`w-full h-full rounded-lg object-cover bg-no-repeat bg-center`

export const AnimatedHeroButton = styled.div(({ position }) => [
  tw`animate-bounce mt-20 relative [&>button]:w-16 [&>button]:h-16 
  [&>button]:[&>span]:w-6 [&>button]:[&>span]:[&>svg]:w-6 [&>button]:[&>span]:[&>svg]:h-6`,
  position && tw`mt-44`,
  `animation: fadeInBottom 1.5s both ;
    @keyframes fadeInBottom{
        0%{
            opacity: 0;
            transform: translateY(50px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }`,
])

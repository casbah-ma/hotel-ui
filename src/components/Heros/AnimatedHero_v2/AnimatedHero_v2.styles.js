import tw, { styled } from 'twin.macro'

export const AnimatedHeroContainer = tw.div`w-full h-[38.188rem] lg:h-[41.438rem] rounded-lg flex flex-col items-center justify-center 
object-cover bg-no-repeat bg-center relative`

export const AnimatedHeroImage = tw.div`w-full h-full bg-no-repeat object-cover brightness-50`

export const AnimatedHeroChildrens = tw.div`absolute w-full h-full flex flex-col items-center justify-start lg:top-[161px]`

export const AnimatedHeroContent = tw.div`xs:w-[17rem] sm:w-[20.563rem] md:w-[30.063rem] lg:w-[48.875rem] text-center text-sm h-1/2 lg:h-1/3 flex flex-col items-center justify-around`

export const AnimatedHeroButtonText = tw.span`w-[157px] absolute -top-3 left-4 md:left-16 text-white text-center md:text-2xl font-indie font-normal -rotate-6`

export const AnimatedHeroButton = styled.div(() => [
  tw`animate-bounce mt-14 relative`,
  `animation: fadeInBottom 1.5s both;
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

import tw, { styled } from 'twin.macro'

export const AnimatedHeroContainer = styled.div((props) => [
  tw`w-full h-[38.188rem] lg:h-[41.438rem] rounded-lg flex flex-col items-center justify-center 
  object-cover bg-no-repeat bg-center relative`,
])

export const AnimatedHeroImage = styled.div((props) => [
  tw`w-full h-full bg-no-repeat object-cover brightness-50`,
])

export const AnimatedHeroChildrens = styled.div((props) => [
  tw`absolute w-full h-full flex flex-col items-center justify-start top-[161px]`,
])

export const AnimatedHeroContent = styled.div((props) => [
  tw`xs:w-[17rem] sm:w-[20.563rem] md:w-[30.063rem] lg:w-[48.875rem] text-center text-sm h-1/2 lg:h-1/3 flex flex-col items-center justify-around`,
])

export const AnimatedHeroButton = styled.div((props) => [
  tw`animate-bounce mt-16`,
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

import tw, { styled } from 'twin.macro'

export const HeroContainer = styled.div(({ gradient, theme }) => [
  tw`w-full h-[51.313rem] lg:h-screen relative`,
  gradient &&
    `&:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary});
    }`,
])

export const HeroImage = styled.div(({ gradient, theme }) => [
  tw`
    w-full h-full bg-no-repeat bg-cover object-cover bg-center  brightness-[.76] bg-opacity-90
    `,
  gradient && tw`bg-opacity-100 brightness-100`,
  gradient &&
    `&:before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 10;
    background: linear-gradient(180deg, ${theme.colors.gradient.primary}, ${theme.colors.gradient.secondary});
    }`,
])

export const HeroInfo = styled.div(({ position }) => [
  tw`w-full absolute lg:top-[11.188rem] md:top-[14.563rem] xs:top-[15.188rem] 2xl:top-[20rem] text-center z-20
  flex flex-col justify-center items-center gap-4`,
  position === 'start' &&
    tw`items-start justify-start pl-3 sm:pl-8 md:pl-[5.5rem] lg:pl-[12.5rem] 2xl:pl-[20rem]  md:top-[10.438rem] lg:top-[14.313rem] 2xl:top-[20rem] gap-2`,
])

export const HeroTitle = styled.div(({ position, withBorder, theme }) => [
  tw`w-full h-full flex items-center justify-center mb-8 relative `,
  position === 'start' &&
    tw`justify-start text-left md:w-[26.375rem] lg:w-[37rem]`,
  withBorder &&
    `
  &:after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: ${position === 'start' ? '0' : 'unset'};
    height: 0.6rem;
    width: 8.75rem;
    background-color: ${theme.colors.bg.primary};
    border-radius: 20px;
  }
 `,
])

export const HeroSubtitle = styled.div(({ position }) => [
  tw`w-full h-full flex justify-center items-start`,
  position === 'start' &&
    tw`justify-end md:pr-8 pr-4 lg:pr-[11.188rem]  mb-20 `,
])

export const HeroAction = styled.div(({ position }) => [
  tw`
     w-full animate-bounce absolute bottom-[11rem] md:bottom-10 lg:bottom-14 2xl:bottom-44
      px-2 flex justify-center items-center z-20
    `,
  position === 'start' && tw`lg:justify-end items-center lg:pr-[11.188rem] `,
  ` animation: fadeInBottom 1.5s both;
    @keyframes fadeInBottom{
      0%{
        opacity: 0;
        transform: translateY(50px);
      }
      100%{
        opacity: 1;
        transform: translateY(0);
    }
  `,
])

import tw, { styled } from 'twin.macro'

export const HeroContainer = styled.div(({ gradient }) => [
  tw`w-full h-[51.313rem] lg:h-screen relative`,
  gradient &&
    'background: linear-gradient(90deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
])

export const HeroImage = styled.div(({}) => [
  `filter: brightness(.7) !important;`,
  tw`
    w-full h-full bg-no-repeat bg-cover object-cover bg-center brightness-50 opacity-20
    `,
])

export const HeroInfo = styled.div(({ position }) => [
  tw`w-full absolute top-[9.188rem] md:top-[19.563rem] text-center
  flex flex-col justify-center items-center gap-6`,
  position === 'start' &&
    tw`items-start justify-start pl-3 sm:pl-8 md:pl-[5.5rem] lg:pl-[12.5rem] md:top-[10.438rem] lg:top-[16.313rem] gap-2`,
])

export const HeroTitle = styled.div(({ position, withBorder, theme }) => [
  tw`w-full h-full flex items-center justify-center mb-8 relative`,
  position === 'start' &&
    tw`justify-start text-left md:w-[26.375rem] lg:w-[32.313rem]`,
  withBorder &&
    `
  &:after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: ${position === 'start' ? '0' : 'unset'};
    height: 0.6rem;
    width: 8.75rem;
    background-color: ${theme.colors.text.primary};
    border-radius: 20px;
  }
 `,
])

export const HeroSubtitle = styled.div(({ position }) => [
  tw`w-full h-full flex justify-center items-start`,
  position === 'start' &&
    tw`justify-center md:justify-end md:pr-8 lg:pr-[11.188rem]`,
])

export const HeroAction = styled.div(({ position }) => [
  tw`
     w-full animate-bounce absolute top-[37.5rem] md:top-[36.063rem] lg:top-[41.563rem]
      px-2 flex justify-center items-center
    `,
  position === 'start' && tw`lg:justify-end items-center lg:pr-[11.188rem]`,
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

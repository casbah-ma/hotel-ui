import tw from 'twin.macro'

export const borderColors = {
  primary: tw`border-black`,
  secondary: tw`border-gray-500`,
  blue: tw`border-blue-400`,
  transparent: tw`bg-transparent`,
}
export const borderBottomColors = {
  white: tw`border-b-white`,
  black: tw`border-b-black`,
  gray: tw`border-b-gray-500`,
  blue: tw`border-b-blue-400`,
}

export const titleLeveles = {
  1: tw`text-[3.5rem] leading-[5.1rem] lg:text-[6.25rem] lg:leading-[7.5rem]`,
  2: tw`text-[2.5rem] leading-[3rem] lg:text-[4.25rem] lg:leading-[5.1rem]`,
  3: tw`text-[2rem] leading-[2.4rem] lg:text-5xl lg:leading-[3.6rem]`,
}
export const fontSizes = {
  xs: tw`text-xs leading-[1rem] md:text-base md:leading-[1.2rem]`,
  sm: tw`text-sm leading-[1rem] md:text-base md:leading-[1.2rem]`,
  rg: tw`text-base leading-[1.2rem] md:text-xl md:leading-6`,
  md: tw`text-xl leading-6 md:text-[1.75rem] md:leading-[2.1rem]`,
}

export const labelFontSizes = {
  xs: tw`text-xs leading-[1rem] md:text-lg md:leading-6`,
  sm: tw`text-base leading-[1.2rem] md:text-xl md:leading-6`,
  md: tw`text-lg leading-[1.35rem] md:text-2xl md:leading-[1.8rem]`,
  lg: tw`text-xl leading-5 md:text-2xl md:leading-[1.8rem]`,
}

export const spacingTop = {
  none: tw`mt-0`,
  xs: tw`mt-6`,
  sm: tw`mt-6 md:mt-12`,
  lg: tw`mt-[7.5rem] md:mt-[12.5rem]`,
}

export const sapcingBottom = {
  none: tw`mt-0`,
  xs: tw`mb-6`,
  sm: tw`mb-6 md:mb-12`,
  lg: tw`mb-[7.5rem] md:mb-[12.5rem]`,
}

export const sapcingLeft = {
  none: tw`pl-0`,
  xs: tw`pl-1 md:pl-6`,
  sm: tw`pl-1 md:pl-0 lg:pl-[7.5rem]`,
  md: tw`pl-1 md:pl-32 lg:pl-60`,
  lg: tw`pl-[7.5rem] md:pl-[15rem] lg:pl-[25rem]`,
}

export const sapcingRight = {
  none: tw`pr-0`,
  xs: tw`pr-1 md:pr-6`,
  sm: tw`pr-1 md:pr-0 lg:pr-[7.5rem]`,
  md: tw`pr-1 md:pr-40 lg:pr-60`,
  lg: tw`pr-1 md:pr-[15rem] lg:pr-[25rem]`,
}

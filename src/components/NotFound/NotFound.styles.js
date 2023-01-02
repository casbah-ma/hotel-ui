import tw, { styled } from 'twin.macro'

export const NotFoundContainer = styled.div(({ theme }) => [
  tw`w-full h-screen flex flex-col items-center justify-center gap[1.5rem]`,


  ,
])

export const StyledTitle = styled.div(({ theme }) => [
  `font-family: ${theme.fontFamily.primary};`,
  tw`text-[1.5rem] font-medium  leading-[1.8rem]`,
])

export const StyledText = styled.div(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`lg:text-[0.938rem] font-medium  leading-[1.5rem] max-w-[28.063rem] text-center`,
])

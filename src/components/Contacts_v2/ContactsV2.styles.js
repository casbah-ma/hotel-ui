import tw, { styled } from 'twin.macro'

export const ContactsV2Container = styled.div(({ theme, color }) => [
    tw` w-full xs:h-[15.625rem] md:h-[10.625rem] lg:h-[10.625rem] 
    flex xs:flex-col md:flex-col lg:flex-row items-center 
    xs:justify-center md:justify-center lg:justify-around
    xs:gap[1rem]  lg:gap-8`,
  `background-color: ${theme.colors.bg.tertiary};`,

  color && `color: ${color};`,
  ,
])

export const StyledPara = tw.div`flex items-center`
export const StyledCol = tw.div`flex flex-col`


export const StyledText = styled.div(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`text-[1.25rem] font-normal leading-[1.5rem] mr-[1.25rem] opacity-40 xs:hidden md:inline lg:inline`,
])

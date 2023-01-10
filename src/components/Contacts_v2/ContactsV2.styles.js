import tw, { styled } from 'twin.macro'

export const ContactsV2Container = styled.div(({ theme, color }) => [
  tw` w-full xs:h-[15.625rem] md:h-[10.625rem] lg:h-[14.375rem] 
    flex xs:flex-col md:flex-row lg:flex-row  
    xs:justify-center md:justify-center lg:justify-around
    xs:gap[1rem] md:gap-[4rem] lg:gap-8 xs:items-center`,
  `background-color: ${theme.colors.bg.tertiary};`,

  color && `color: ${color};`,
  ,
])

export const StyledPara = tw.div`flex flex-col xs:items-center md:items-start lg:items-start`
export const StyledCol = tw.div`flex flex-col justify-center lg:gap-[1.5rem]`

export const StyledText = styled.div(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`text-[1.25rem] font-normal leading-[1.5rem] mr-[1.25rem] opacity-40 xs:hidden md:inline lg:inline`,
])

export const StyledParagraph = styled.div(({ theme, color }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`lg:text-[1.75rem] font-semibold leading-[2.1rem]`,
  color && `color: ${color};`,
])

export const ContactsTitle = styled.div(({ theme }) => [
  tw`lg:self-start md:self-start`,
])

export const StyledTitle = styled.div(({ theme, titleColor }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`lg:text-[3.25rem] font-bold  leading-[3.9rem] lg:mt-[1.813rem] md:mt-2 xs:mt-0 xs:text-[2rem] tracking-[-0.05rem]`,
  titleColor && `color: ${titleColor};`,
])

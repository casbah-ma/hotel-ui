import tw, { styled } from 'twin.macro'

export const FooterContainer = styled.footer(({ color, bgColor, theme }) => [
  tw`
 w-full 
 h-full lg:h-[38.25rem]
 px-[1rem] py-[2rem]
 md:px-[1.438rem] md:py-[2.938rem] 
 lg:px-[7.5rem] lg:py-[5.25rem]
 flex flex-col items-center
 justify-between
`,
  color ? `color: ${color};` : tw`text-white`,
  bgColor
    ? `background-color: ${bgColor};`
    : `background-color: ${theme.colors.bg.primary};`,
  ,
])

export const TopContent = tw.div`w-full pb-[3.938rem] flex 
xs:flex-col md:flex-row md:flex-wrap lg:flex-row 
justify-between`

export const FooterLogo = tw.div`flex flex-col items-center justify-center w-[14rem]`
export const FooterText = tw.div`w-full lg:w-[20.25rem] xs:pt-[4.188rem]`
export const BottomContent = tw.div`w-full`
export const FooterLinks = tw.div`w-full [&>div]:mt-[1.938rem]`
export const FooterLink = tw.div`w-full mb-4`
export const Icon = tw.div`w-[1.25rem] mr-2`
export const Element = tw.div`mt-[1.938rem] flex flex-col mb-[3.813rem] gap-4`
export const Section = tw.div`[&>div]:mt-[1.938rem]`
export const IconLabel = tw.div`flex items-center`
export const Rows = tw.div`flex flex-col lg:p-0 xs:pt-[1.813rem]
[&>Button]:mt-[2rem] [&>Label]:mb-[1.938rem]
`
export const Input = styled.input(({ theme, bgColor }) => [
  tw`w-[14.125rem] lg:w-[18.125rem] h-[4.25rem] border-b-[0.063rem] font-secondary
outline-none text-base`,
  bgColor
    ? `background-color: ${bgColor};`
    : `background-color: ${theme.colors.bg.primary};`,
])

export const FooterDivider = styled.div(({ theme }) => [
  tw`border w-full`,
  `border-color: ${theme.colors.border.transparent};`,
])

export const FooterDividerText = tw.div`w-full flex items-center justify-between pt-[1.5rem]`
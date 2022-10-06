import tw, { styled } from 'twin.macro'

export const FooterContainer = styled.footer(({ color, bgColor, theme }) => [
  tw`
 w-full h-[39.50rem] md:h-[38.50rem] 
 px-5 lg:px-64 py-5  flex flex-col items-center
 justify-between
`,
  color ? `color: ${color};` : tw`text-white`,
  bgColor
    ? `background-color: ${bgColor};`
    : `background-color: ${theme.colors.bg.primary};`,
  ,
])

export const InputContainer = tw.div`w-full flex flex-col items-center justify-center`
export const InputError = tw.span`text-red-500 self-start mt-2`

export const AddressContainer = tw.div`w-full flex flex-col items-center justify-center sm:gap-5`
export const ContactContainer = tw.div`w-full flex flex-wrap items-center justify-center sm:gap-10`

export const FooterLogo = tw.div`flex flex-col items-center justify-center w-56 md:w-96`
export const FooterText = tw.div`w-[15.68rem] md:w-[32.813rem] text-center justify-self-start`

export const FooterLinks = tw.ul`text-center flex flex-wrap items-center justify-center w-72 md:w-full`
export const FooterLinkDivider = tw.div`border-solid border-2 rounded-full mx-3 md:mx-5`
export const FooterDivider = tw.div`border-solid border w-full sm:w-[19.37rem] md:w-[85vw] lg:w-[90vw] mt-3 rounded-full`
export const FooterDividerText = tw.div`p-0 w-[16rem] sm:w-[19.37rem] md:w-[85vw] lg:w-[90vw] flex items-center justify-between text-xs -mt-5 xs:flex-col md:flex-row`

export const FooterLinkWrapper = tw.div`flex justify-center items-center`
export const FooterLink = tw.div`text-center cursor-pointer mx-auto`

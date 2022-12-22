import tw, { styled } from 'twin.macro'

export const FooterContainer = styled.footer(({ color, bgColor, theme }) => [
  tw`
 w-full h-[39.50rem] md:h-[38.50rem] 
 px-5 lg:px-64 py-5  flex flex-col items-center
 justify-between z-50
`,
  color ? `color: ${color};` : tw`text-white`,
  bgColor
    ? `background-color: ${bgColor};`
    : `background-color: ${theme.colors.bg.primary};`,
  ,
])

export const InputContainer = tw.div`w-full flex flex-col items-center justify-center z-10`
export const InputError = tw.span`text-red-500 self-start mt-2 z-10`

export const AddressContainer = tw.div`w-full flex flex-col items-center justify-center sm:gap-5 z-10`
export const ContactContainer = tw.div`w-full flex flex-wrap items-center justify-center sm:gap-10 z-10`

export const FooterLogo = tw.div`flex flex-col items-center justify-center w-56 md:w-96 z-10`
export const FooterText = tw.div`w-[15.68rem] md:w-[40.813rem] text-center justify-self-start z-10`

export const FooterLinks = tw.ul`text-center flex flex-wrap items-center justify-center w-72 md:w-full z-10`
export const FooterLinkDivider = tw.div`border-solid border-2 rounded-full mx-3 md:mx-5 z-10`
export const FooterDivider = tw.div`border-solid border w-full sm:w-[19.37rem] md:w-[85vw] lg:w-[90vw] mt-3 rounded-full z-10`
export const FooterDividerText = tw.div`p-0 w-[16rem] sm:w-[19.37rem] md:w-[85vw] lg:w-[90vw] flex items-center justify-between text-xs -mt-5 xs:flex-col md:flex-row z-10`

export const FooterLinkWrapper = tw.li`flex justify-center items-center z-10`
export const FooterLink = tw.div`text-center cursor-pointer mx-auto z-10`


export const ShapesSection = styled.section(({ color, bgColor, theme }) => [
  tw`w-full h-full relative bg-red-400`,
  color ? `color: ${color};` : `color: white;`,
  bgColor
    ? `background: ${bgColor};`
    : `background: ${theme.colors.bg.primary};`,
])

export const FooterShapes = styled.section((color, bgColor, theme) => [
  tw`w-full min-h-full flex justify-between absolute top-0 bottom-0 left-0 overflow-hidden`,
])
import tw, { styled } from 'twin.macro'

export const BookingWrapper = tw.section`w-full h-full flex flex-col justify-center items-center relative`
export const BookingButton = styled.button(({ theme }) => [
  tw`w-[10.688rem] p-2 lg:w-[15.438rem] h-[4.125rem] lg:h-[6.813rem] rounded-r-3xl text-xs lg:text-[1.5rem] text-white text-center flex items-center justify-center self-end font-semibold leading-7 `,
  `background-color: ${theme.colors.bg.primary};
  color: ${theme.colors.DatesCore.bg};
  `,
])

export const BookingMobileButton = styled.button(({ theme }) => [
  tw`py-3 px-5 border border-gray-700 mt-4
   font-semibold text-sm 
  md:text-base lg:text-xl transform hover:scale-100 
  rounded-xl border-none max-w-[160px] min-w-min whitespace-nowrap`,
  `background-color: ${theme.colors.bg.primary};
  color: ${theme.colors.DatesCore.bg};
  font-family: ${theme.fontFamily.secondary};
  `,
])

export const BookngContainer = styled.div(({ theme }) => [
  tw`
  h-[4.125rem] lg:h-[6.75rem] xs:w-[18rem] sm:w-[22.438rem] md:w-[45.5rem] lg:w-[68.75rem] rounded-3xl flex justify-between items-center shadow-card bg-white`,
  `background-color: ${theme.colors.DatesCore.bg};
  color: ${theme.colors.DatesCore.text};`,
])
export const BookingContent = tw.div`w-full lg:flex-1 h-full rounded-3xl md:rounded-r-none md:rounded-l-3xl 
flex items-center justify-center divide-x divide-gray-300 py-3 px-2 lg:py-6`
export const BookingContentLeft = tw.div`w-[13.75rem] md:flex-1 h-full flex items-center justify-around  cursor-pointer
xs:[&>div]:[&>button]:[&>div]:[&>span]:[&>svg]:w-2.5 md:[&>div]:[&>button]:[&>div]:[&>span]:[&>svg]:w-auto xs:pr-1 lg:pr-8`
export const BookingContentRight = tw.div`w-[8.688rem] md:w-1/3 lg:flex-1 h-full flex items-center justify-around xs:[&>div]:[&>button]:[&>div]:[&>span]:[&>svg]:w-2.5 md:[&>div]:[&>button]:[&>div]:[&>span]:[&>svg]:w-auto
xs:pr-1 lg:pr-8
`

export const Row = tw.div`
    flex flex-col justify-center items-start w-full xs:pl-[1rem] lg:pl-[3rem] h-full cursor-pointer
  `
export const Values = tw.span`
   text-[0.79rem] leading-[1rem] md:text-xl md:leading-6 text-[#767676] font-medium 
 `

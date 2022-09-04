import tw, { styled } from 'twin.macro'

export const BookingWrapper = tw.section`w-full h-full flex flex-col justify-center items-center relative`
export const BookingButton = styled.button(({ theme }) => [
  tw`w-[10.688rem] lg:w-[15.438rem] h-[4.125rem] lg:h-[6.813rem] rounded-r-3xl text-xs lg:text-base text-white font-bold text-center flex items-center justify-center self-end`,
  `background-color: ${theme.colors.bg.primary};
  color: ${theme.colors.text.primary};
  `,
])

export const BookingMobileButton = styled.button(({ theme }) => [
  tw`py-3 px-5 border border-gray-700 mt-4
  font-secondary font-semibold text-sm 
  md:text-base lg:text-xl transform hover:scale-100 
  rounded-xl border-none max-w-[160px] min-w-min whitespace-nowrap`,
  `background-color: ${theme.colors.bg.primary};
  color: ${theme.colors.text.primary};
  `,
])

export const BookngContainer = tw.section`h-[4.125rem] lg:h-[6.75rem] xs:w-[18rem] sm:w-[22.438rem] md:w-[45.5rem] lg:w-[68.75rem] rounded-3xl flex justify-between items-center shadow-card bg-white`

export const BookingContent = tw.div`w-full lg:flex-1 h-full rounded-3xl md:rounded-r-none md:rounded-l-3xl 
flex items-center justify-center divide-x divide-gray-300 py-3 md:px-2 lg:py-6`
export const BookingContentLeft = tw.div`w-[13.75rem] md:flex-1 h-full flex items-center justify-around`
export const BookingContentRight = tw.div`w-[8.688rem] md:w-1/3 lg:flex-1 h-full flex items-center justify-around`

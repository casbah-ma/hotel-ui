import tw, { styled } from 'twin.macro'

export const BookngContainer = tw.section`w-[68.75rem] h-[6.75rem] rounded-3xl flex justify-between items-center shadow-card`
export const BookingContent = tw.div`flex-1 h-full rounded-l-3xl flex items-center justify-center divide-x divide-gray-300 py-6`
export const BookingContentLeft = tw.div`flex-1 h-full rounded-l-3xl flex items-center justify-around `
export const BookingContentRight = tw.div`flex-1 h-full rounded-r-3xl flex items-center justify-around`
export const BookingButton = styled.button(({ theme }) => [
  tw`w-[15.438rem] h-[6.813rem] rounded-r-3xl text-white font-bold text-center flex items-center justify-center self-end`,
  `background-color: ${theme.colors.bg.primary};`,
])

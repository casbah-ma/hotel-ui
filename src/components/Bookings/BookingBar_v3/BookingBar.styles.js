import tw, { styled } from 'twin.macro'

export const BookingBarContainer = styled.div(({ theme }) => [
  tw`w-[18rem] sm:w-[19.438rem] h-[26.625rem] flex-col md:flex-row
  md:w-[50rem] md:h-[7rem] lg:w-[52rem] lg:h-[8.25rem]  
  flex items-center justify-center shadow-card rounded-xl border border-white`,
  `background-color: ${theme.colors.DatesCore.bg};`,
])

export const BookingContent = styled.div(({ theme }) => [
  tw`px-10 md:px-0 flex flex-col md:flex-row items-center justify-between w-full h-full divide-y md:divide-y-0 md:divide-x divide-black`,
])

export const BookingCulmns = styled.div(({ theme }) => [
  tw`flex flex-col items-start justify-center w-full h-full [&>*]:ml-2 [&>span]:mt-3 gap-3.5 `,
])

export const BookingDate = styled.input(({ theme }) => [
  tw`w-auto h-auto text-black cursor-pointer focus:outline-none `,
])

export const BookingButton = styled.button(({ theme }) => [
  tw`w-full h-[5.5rem] md:w-[10.688rem] lg:w-[15.625rem] md:h-full
  rounded-b-xl md:rounded-b-none md:rounded-r-xl 
  text-xs lg:text-base text-white font-bold text-center flex items-center justify-center self-end`,
  `background-color: ${theme.colors.bg.primary};
    color: ${theme.colors.text.secendary};
    `,
])

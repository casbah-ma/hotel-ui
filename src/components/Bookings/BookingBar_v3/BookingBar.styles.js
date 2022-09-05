import tw, { styled } from 'twin.macro'

export const BookingBarContainer = styled.div(({ showContent, theme }) => [
  tw`w-[18rem] sm:w-[19.438rem] h-[26.625rem] flex-col md:flex-row
  md:w-[50rem] md:h-[7rem] lg:w-[52rem] lg:h-[8.25rem]  
  transform transition duration-75
  flex items-center justify-center shadow-card rounded-xl border border-white`,
  `background-color: ${theme.colors.DatesCore.bg};`,

  showContent && tw`h-[7.063rem]`,
])

export const BookingContent = styled.div(({ showContent }) => [
  tw` w-full h-full px-10 md:px-0
      flex flex-col md:flex-row items-center justify-between
      divide-y md:divide-y-0 md:divide-x divide-black`,
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

export const ShowContentButton = styled.button(({ theme }) => [
  tw`w-full h-8 
  rounded-b-xl text-white font-bold text-center flex items-center justify-center self-end`,
  `background-color: ${theme.colors.bg.primary};
    color: ${theme.colors.text.secendary};
    `,
])

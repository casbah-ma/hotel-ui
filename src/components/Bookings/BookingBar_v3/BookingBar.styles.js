import tw, { styled } from 'twin.macro'

export const BookingBarContainer = styled.div(({ theme }) => [
  tw`w-[52rem] flex items-center justify-center h-[8.25rem] shadow-card rounded-xl border border-white  `,
  `background-color: ${theme.colors.DatesCore.bg};`,
])

export const BookingContent = styled.div(({ theme }) => [
  tw`flex items-center justify-between w-full h-full  divide-x divide-black`,
])

export const BookingCulmns = styled.div(({ theme }) => [
  tw`flex flex-col items-start justify-center w-full h-full [&>*]:ml-2 [&>span]:mt-3 gap-3.5`,
])

export const BookingDate = styled.input(({ theme }) => [
  tw`w-2/3 h-auto text-black cursor-pointer focus:outline-none `,
])

export const BookingButton = styled.button(({ theme }) => [
  tw`w-[10.688rem] lg:w-[15.625rem] h-[4.125rem] lg:h-[8.25rem] rounded-r-xl text-xs lg:text-base text-white font-bold text-center flex items-center justify-center self-end`,
  `background-color: ${theme.colors.bg.primary};
    color: ${theme.colors.text.secendary};
    `,
])

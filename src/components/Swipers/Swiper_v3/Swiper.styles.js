import tw, { styled } from 'twin.macro'

export const SwiperContainer = tw.section`w-full h-full p-2 flex flex-col lg:flex-row justify-start items-start`
export const SwiperHeader = tw.div`mb-6  lg:mb-[6rem]`
export const SwiperContent = tw.div`w-full mb-10 lg:w-[19rem] h-full lg:mx-[3rem] flex flex-col items-start justify-start`
export const SwiperButtonsContainer = tw.div`w-[10rem] flex justify-between items-center`
export const SwiperButton = styled.button(({ theme }) => [
  tw`w-16 h-16 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-100`,
  'background-color: ' + theme.colors.bg.tertiary,
])

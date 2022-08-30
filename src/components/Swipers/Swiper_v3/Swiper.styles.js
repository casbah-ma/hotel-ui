import tw, { styled } from 'twin.macro'

export const SwiperContainer = tw.section`w-full h-full p-2 flex justify-start items-start`
export const SwiperHeader = tw.div`mb-[8rem]`
export const SwiperContent = tw.div`w-[19rem] h-full m-[4rem] mr-[4rem] flex flex-col items-start justify-start`
export const SwiperButtonsContainer = tw.div`w-[10rem] flex justify-between items-center`
export const SwiperButton = styled.button(({ theme }) => [
  tw`w-16 h-16 rounded-full cursor-pointer flex items-center justify-center`,
  'background-color: ' + theme.colors.bg.tertiary,
])

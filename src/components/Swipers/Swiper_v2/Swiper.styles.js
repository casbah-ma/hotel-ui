import tw, { styled } from 'twin.macro'

export const SwiperContainer = styled.section((header) => [
  tw`w-full h-full flex flex-col justify-start items-start gap-5 pb-[5rem]`,
  !header && tw`gap-0`,
])
export const SwiperInfo = tw.div`w-full h-full flex items-start justify-start relative mb-6`
export const SwiperContent = tw.div`w-full h-full flex items-center justify-around`
export const SwiperNavigation = styled.div((header) => [
  tw`w-[8rem] flex justify-between items-center self-end absolute top-2 right-20`,
  header.header === true && tw`absolute -top-40 right-20`,
])
export const SwiperButton = styled.button(({ theme }) => [
  tw`border w-14 h-14 rounded-full cursor-pointer flex items-center justify-center active:text-white bg-white`,
  `&:active{
    background-color:  ${theme.colors.bg.primary};
    fill: white;
   }`,
])

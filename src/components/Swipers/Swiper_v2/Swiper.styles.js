import tw, { styled } from 'twin.macro'

export const SwiperContainer = tw.section`w-full h-full p-2 flex flex-col justify-start items-start`
export const SwiperInfo = tw.div`w-full h-full flex items-start justify-start`
export const SwiperContent = tw.div`w-full h-full flex items-center justify-around mt-[3.5rem]`
export const SwiperNavigation = tw.div`w-[8rem] flex justify-between items-center self-end`
export const SwiperButton = styled.button(({ theme }) => [
  tw`border w-14 h-14 rounded-full cursor-pointer flex items-center justify-center active:text-white shadow-card`,
  `&:active{
    background-color:  ${theme.colors.bg.primary};
    fill: white;
   }`,
])

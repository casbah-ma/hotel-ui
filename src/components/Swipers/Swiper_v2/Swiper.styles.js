import tw, { styled } from 'twin.macro'

export const SwiperContainer = tw.section`w-full h-full p-2 flex flex-col justify-start items-start`
export const SwiperHeader = tw.div`w-[45.75rem]`
export const SwiperSlide = styled.div(() => [])
export const SwiperButton = styled.button(() => [])
export const SwiperButtonPrev = styled(SwiperButton)(() => [])
export const SwiperButtonNext = styled(SwiperButton)(() => [])

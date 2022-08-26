import tw, { styled } from 'twin.macro'

export const SwiperContainer = styled.div(() => [
  tw`w-full h-full p-2 flex flex-col justify-start items-start `,
])
export const SwiperWrapper = styled.div(() => [])
export const SwiperSlide = styled.div(() => [])
export const SwiperButton = styled.button(() => [])
export const SwiperButtonPrev = styled(SwiperButton)(() => [])
export const SwiperButtonNext = styled(SwiperButton)(() => [])

SwiperContainer.defaultProps = { className: 'group' }

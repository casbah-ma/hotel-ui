import tw, { styled } from 'twin.macro'
export const imagePositions = {
  bottom: tw`flex-col`,
  right: tw`flex-col items-end md:flex-row gap-10 md:gap-[7.75rem]`,
  left: tw` flex-col items-start md:flex-row gap-10 md:gap-[7.75rem]`,
}

export const Container = styled.div(() => [
  tw`flex w-full gap-10 md:gap-12`,
  ({ imagePosition }) => imagePositions[imagePosition],
])

export const Content = styled.div(({ contentIsCentred }) => [
  tw`flex flex-col justify-between gap-10`,
  contentIsCentred && tw`justify-center`,
])

export const Image = styled.div(({ imagePosition }) => [
  tw`relative flex-shrink-0`,
  imagePosition === 'left' ? tw`order-last md:order-first` : tw`order-last`,
])

export const SmallImage = styled.div(({ imagePosition }) => [
  tw`absolute bottom-12`,
  imagePosition === 'left' ? tw`-right-20` : tw`-left-20`,
])

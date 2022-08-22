import tw, { styled } from 'twin.macro'
export const imagePositions = {
  bottom: tw`flex-col`,
  right: tw`flex-col md:flex-row gap-10 md:gap-[8.75rem]`,
  left: tw` flex-col md:flex-row gap-10 md:gap-[7.75rem]`,
}

export const Container = styled.div(({ imagePosition }) => [
  tw`flex w-full gap-10 md:gap-12`,
  ({ imagePosition }) => imagePositions[imagePosition],
])

export const Content = tw.div`
  flex flex-col justify-between gap-12
`
export const Text = tw.div`
  flex flex-col gap-y-[3.2rem]
`

export const Grid = tw.section`
  grid grid-cols-2 gap-4 md:gap-12 
`

export const Article = styled.article(({ columns }) => [
  // one columns layout
  columns === 1 && tw`col-span-2`,
  // two columns layout
  columns === 2 && tw`col-span-2 md:col-span-1`,
  // three columns layout
  columns === 3 && tw`first:col-span-2 col-span-2 md:col-span-1`,
])

export const Image = styled.div(({ imagePosition }) => [
  imagePosition === 'left' ? tw`order-last md:order-first` : tw`order-last`,
])

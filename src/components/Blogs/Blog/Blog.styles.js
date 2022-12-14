import tw, { styled } from 'twin.macro'
export const imagePositions = {
  bottom: tw`flex-col`,
  right: tw`flex-col md:flex-row gap-10 md:gap-[8.75rem]`,
  left: tw` flex-col md:flex-row gap-10 md:gap-[7.75rem]`,
}

export const Container = styled.div(() => [
  tw`flex w-full gap-10 md:gap-9 `,
  ({ imagePosition }) => imagePositions[imagePosition],
])

export const Content = styled.div(({ contentIsCentred }) => [
  tw`flex flex-col justify-between gap-10 md:gap-12`,
  contentIsCentred && tw`justify-center`,
])

export const Text = tw.div`
  flex flex-col gap-y-[3.2rem] xs:p-2 sm:p-0
`

export const Grid = styled.section(({ rows }) => [
  rows === 1
    ? tw`grid lg:grid-cols-3 gap-5 lg:gap-12`
    : tw`grid grid-cols-2 gap-4 md:gap-12`,
])

export const Article = styled.article(({ columns, rows }) => [
  // one columns layout
  columns === 1 && tw`col-span-2`,
  // two columns layout
  columns === 2 && tw`col-span-2 md:col-span-1`,
  // Three columns
  columns === 3 && rows !== 1 && tw`first:col-span-2 col-span-2 md:col-span-1`,
  columns === 3 && rows === 1 && tw`col-span-3 lg:col-span-1`,
])

export const Image = styled.div(({ imagePosition, varaint }) => [
  tw`flex-shrink-0 inline-grid`,
  imagePosition === 'left' ? tw`order-last md:order-first` : tw`order-last`,
])

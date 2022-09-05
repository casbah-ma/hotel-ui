import tw, { styled } from 'twin.macro'

export const imgSizes = {
  sm: tw`h-80 md:h-[20.475rem]`,
  md: tw`h-80 md:h-[29.375rem]`,
  lg: tw`h-80 md:h-[39rem]`,
  xl: tw`h-80 md:h-[48rem]`,
}
export const imgSizesNext = {
  sm: { width: 546, height: 327.6 },
  md: { width: 546, height: 470 },
  lg: { width: 546, height: 470 },
  xl: { width: 546, height: 380 },
}

export const MasonryWrapper = tw.section`w-auto h-full p-2 flex flex-col`

export const MasonryHeader = tw.div`mb-[8rem]`

export const MasonryContainer = styled.div(() => [
  tw`
  column-count[1] md:column-count[2] lg:column-count[3] column-width[10rem] gap-x-10`,
  `columns: 10px;`,
])

export const MasonryItem = tw.div`
inline-block w-full h-full mb-4 md:mb-8
`

export const StyledImage = tw.div`object-cover rounded-lg `

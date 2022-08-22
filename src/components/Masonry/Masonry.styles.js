import tw, { styled } from 'twin.macro'

export const imgSizes = {
  sm: tw`h-80 md:h-[23.75rem]`,
  md: tw`h-80 md:h-[28.5rem]`,
  lg: tw`h-80 md:h-[39rem]`,
  xl: tw`h-80 md:h-[48rem]`,
}
export const imgSizesNext = {
  sm: 380,
  md: 456,
  lg: 624,
  xl: 768,
}

export const Wrapper = tw.section`
  flex flex-col gap-6 md:gap-12
`

export const MasonryContainer = tw.div`
  column-count[1] md:column-count[2] column-gap[2rem]
`

export const MasonryItem = tw.div`
inline-block w-full mb-4 md:mb-8
`

export const StyledImage = tw.div`object-cover w-full rounded-lg`

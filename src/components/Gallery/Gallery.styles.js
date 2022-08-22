import tw, { styled } from 'twin.macro'
import { getImage } from '@/styles/helpers'

export const gridVariants = {
  threeColumns: tw`grid-cols-2 gap-2 md:grid-cols-3 last:col-span-2`,
  twoColumns: tw`grid-template-columns[1.3fr 1fr] grid-auto-rows[3rem]`,
}

const imgSizes = {
  sm: tw`grid-row[span 8]`,
  md: tw`grid-row[span 10]`,
  lg: tw`grid-row[span 13]`,
  xl: tw`grid-row[span 16]`,
}

export const StyledContainer = tw.section`
  w-full flex flex-col gap-12 justify-center items-center text-black 
`

export const StyledGallery = tw.section`
  w-full flex justify-start items-start
  rounded-lg overflow-y-auto scrollbar-hide
`

export const StyledGrid = styled.section(({ variant }) => [
  tw`w-[75%] grid md:gap-7 lg:gap-8`,
  ({ variant }) => gridVariants[variant],
])

export const StyledImage = styled.img(({ src, variant, imgSize }) => [
  //three columns
  variant === 'threeColumns' &&
    tw`w-full h-32  md:h-72 lg:h-80 object-cover rounded-lg cursor-pointer 
  last:col-span-2 last:h-36  md:last:col-span-1 md:last:h-72 lg:last:h-80
    `,
  //Two columns
  ({ imgSize }) => imgSizes[imgSize],
  ({ src }) => getImage(src),
])

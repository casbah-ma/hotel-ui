import { getImage } from '@/styles/helpers'
import tw, { styled } from 'twin.macro'

//vraint object
export const imageVariants = {
  shape1: tw`sm:w-[11.25rem] md:w-[23rem] lg:w-[25rem] h-[32rem] object-cover rounded-xl`,
  shape2: tw`w-[30rem] md:w-[30rem] lg:w-full h-[21.375rem] object-cover rounded-xl`,
  shape3: tw`w-[30rem] lg:w-full  h-96  object-cover rounded-lg`,
  small: tw`w-[22.5rem] h-[15.5rem]`,
  imageVerticalTall: tw`w-full h-[30.5rem] md:min-w-[20rem] lg:min-w-[31.25rem] md:h-[37.5rem] object-cover rounded-lg`,
  imageFlexible: tw`w-full h-[30rem] object-cover rounded-lg`,
}

//styles
export const StyledImage = styled.div(({ variant, src }) => [
  ({ variant }) => imageVariants[variant],
])

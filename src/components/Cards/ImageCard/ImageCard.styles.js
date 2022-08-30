import { getImage } from '@/styles/helpers'
import tw, { styled } from 'twin.macro'

//vraint object
export const imageVariants = {
  shape1: tw`w-[11.25rem] md:w-[23rem] lg:w-[25rem] h-[32rem] object-cover rounded-xl`,
  shape2: tw`w-[23rem] lg:w-[32.5rem] h-[21.375rem] object-cover rounded-xl`,
  shape3: tw`w-[30rem] lg:w-[32.5rem]  h-96  object-cover rounded-lg`,
  shape4: tw`w-[9.5rem] md:w-[15.375rem] lg:w-[19.762rem] h-[9.875rem] md:h-[15.938rem] lg:h-[20.475rem]  object-cover rounded-lg`,
  shape5: tw`w-[16.5rem] md:w-[26.563rem] lg:w-[34.125rem] h-[9.875rem] md:h-[15.938rem] lg:h-[20.475rem]  object-cover rounded-lg`,
  shape6: tw`w-[18.5rem] lg:w-[26.25rem] h-[19.813rem] lg:h-[30.5rem]  object-cover rounded-lg`,
  small: tw`w-[22.5rem] h-[15.5rem]`,
  imageVerticalTall: tw`w-full h-[30.5rem] md:min-w-[20rem] lg:min-w-[31.25rem] md:h-[37.5rem] object-cover rounded-lg`,
  imageFlexible: tw`w-full h-[30rem] object-cover rounded-lg`,
}
//styles
export const StyledImage = styled.div(({ variant, src }) => [
  ({ variant }) => imageVariants[variant],
])

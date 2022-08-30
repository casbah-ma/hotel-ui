import tw, { styled } from 'twin.macro'

//vraint object
export const imageVariants = {
  shape1: tw`sm:w-[11.25rem] md:w-[23rem] lg:w-[25rem] h-[32rem] object-cover rounded-xl`,
  shape2: tw`w-[30rem] md:w-[30rem] lg:w-full h-[21.375rem] object-cover rounded-xl`,
  shape3: tw`w-[30rem] lg:w-full  h-96  object-cover rounded-lg`,
  small: tw`w-[22.5rem] h-[15.5rem]`,
  extraSmall: tw`w-[7.4rem] h-[8.2rem] md:w-[8.2rem] md:h-[9.45rem] lg:w-[20.75rem] lg:h-[16.25rem] rounded-xl`,
  imageVertical: tw`w-[14.75rem] h-[16.4rem] md:w-[17.5rem] md:h-[19.4rem] lg:w-[33.75rem] lg:h-[37.5rem] rounded-xl`,
  imageVerticalTall: tw`w-full h-[30.5rem] md:min-w-[20rem] lg:min-w-[31.25rem] md:h-[37.5rem] object-cover rounded-lg`,
  imageHorizontal: tw`w-[22.5rem] h-[22rem] md:w-[19.4rem] md:h-[23.25rem] lg:w-[34.4rem] lg:h-[30rem]`,
  imageFlexible: tw`w-full h-[30rem] object-cover rounded-lg`,
}

//styles
export const StyledImage = styled.div(({ variant, src }) => [
  ({ variant }) => imageVariants[variant],
])

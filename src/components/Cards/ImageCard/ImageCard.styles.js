import tw, { styled } from 'twin.macro'

//vraint object
// export const imageVariants = {
//   shape1: tw`w-[11.25rem] md:w-[23rem] lg:w-[25rem] h-[32rem] object-cover rounded-xl`,
//   shape2: tw`w-[23rem] lg:w-[32.5rem] h-[21.375rem] object-cover rounded-xl`,
//   shape3: tw`w-[30rem] lg:w-[32.5rem]  h-96  object-cover rounded-lg`,
//   shape4: tw`w-[9.5rem] md:w-[15.375rem] lg:w-[19.762rem] h-[9.875rem] md:h-[15.938rem] lg:h-[20.475rem]  object-cover rounded-lg`,
//   shape5: tw`w-[16.5rem] md:w-[26.563rem] lg:w-[34.125rem] h-[9.875rem] md:h-[15.938rem] lg:h-[20.475rem]  object-cover rounded-lg`,
//   shape6: tw`w-[18.5rem] lg:w-[26.25rem] h-[19.813rem] lg:h-[30.5rem]  object-cover rounded-lg`,
//   small: tw`w-[22.5rem] h-[15.5rem]`,
//   extraSmall: tw`w-[7.4rem] h-[8.2rem] md:w-[8.2rem] md:h-[9.45rem] lg:w-[20.75rem] lg:h-[16.25rem] rounded-xl`,
//   imageVertical: tw`w-[14.75rem] h-[16.4rem] md:w-[17.5rem] md:h-[19.4rem] lg:w-[33.75rem] lg:h-[37.5rem] rounded-xl`,
//   imageVerticalTall: tw`w-full h-[30.5rem] md:min-w-[20rem] lg:min-w-[31.25rem] md:h-[37.5rem] object-cover rounded-lg`,
//   imageHorizontal: tw`w-[22.5rem] h-[22rem] md:w-[19.4rem] md:h-[23.25rem] lg:w-[34.4rem] lg:h-[30rem]`,
//   imageFlexible: tw`w-full h-[30rem] object-cover rounded-lg`,
// }
//styles
export const StyledImage = styled.div(() => [
  ({ variant }) => imageVariants[variant],
])

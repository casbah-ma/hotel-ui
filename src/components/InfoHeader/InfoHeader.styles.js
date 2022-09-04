import tw, { styled } from 'twin.macro'

export const ContainerVariants = {
  v1: tw`flex-col gap-10 `,
  v2: tw`flex-col-reverse gap-4`,
}

export const textVariants = {
  v1: tw`flex-col gap-4`,
  v2: tw`flex-row gap-4`,
}
export const HeaderContainer = styled.div(() => [
  tw`w-full flex items-center justify-center`,
  ({ variant }) => ContainerVariants[variant],
])
export const TextWrapper = styled.div(() => [
  tw`w-full flex items-center justify-center`,
  ({ variant }) => textVariants[variant],
])

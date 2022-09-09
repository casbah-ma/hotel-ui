import tw, { styled } from 'twin.macro'

export const ExploreWrapper = styled.section(({ variant }) => [
  tw` w-full h-full flex flex-col justify-between items-start gap-10`,
  variant === 'v2' && tw`items-center`,
])

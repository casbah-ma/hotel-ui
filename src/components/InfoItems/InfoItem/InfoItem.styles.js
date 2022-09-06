import tw, { styled } from 'twin.macro'

export const Container = styled.li(({ space }) => [
  tw`w-full flex justify-start gap-1.5 mb-3 last:mb-0`,
  space && tw`justify-between mb-5`,
])

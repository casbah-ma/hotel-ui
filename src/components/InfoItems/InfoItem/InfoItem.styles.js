import tw, { styled } from 'twin.macro'

export const Container = styled.li(({ space }) => [
  tw`w-full flex justify-start mb-5`,
  space && tw`justify-between`,
])

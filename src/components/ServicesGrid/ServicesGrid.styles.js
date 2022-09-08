import tw, { styled } from 'twin.macro'

export const variants = {
  v1: tw`grid-cols-2 gap-y-4 items-center md:grid-cols-4 whitespace-nowrap`,
  v2: tw`grid-cols-1 gap-10 md:grid-cols-2`,
  v3: tw`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-12`,
}

export const Grid = styled.section(() => [
  tw`w-full grid`,
  ({ variant }) => variants[variant],
])

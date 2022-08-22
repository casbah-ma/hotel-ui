import tw, { styled } from 'twin.macro'

export const Category = styled.li(({ active }) => [
  tw`flex justify-center items-center whitespace-nowrap max-w-max pb-3 mr-11 cursor-pointer`,
  active &&
    tw`border-b border-black font-semibold
`,
])

export const StyledIcon = tw.span`w-3.5 md:w-5 mr-5`

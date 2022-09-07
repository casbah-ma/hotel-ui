import tw, { styled } from 'twin.macro'

export const variants = {
  v1: tw`pb-3 mr-11 `,
  v2: tw`px-8 py-3 border border-[#D4D4D4] rounded-full`,
  v3: tw`pb-0 mr-10 `,
}

export const Tag = styled.li(({ active, variant, theme }) => [
  tw`inline-flex items-center max-w-max cursor-pointer last:mr-0`,
  ({ variant }) => variants[variant],
  //Active styles
  variant === 'v1' && active && tw`border-b border-black font-semibold`,
  variant === 'v2' &&
    active &&
    `background-color: ${theme.colors.bg.primary};
  border: 1px solid #21B67C;
  opacity: 0.8;
  `,
])

export const StyledIcon = tw.span`w-3.5 md:w-5 mr-5`

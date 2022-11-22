import tw, { styled } from 'twin.macro'

export const ContactsVariant = {
  v1: tw` h-[23.75rem] flex flex-col items-center justify-center`,
  v2: tw` h-[10.625rem] flex xs:flex-col md:flex-col lg:flex-row items-center justify-around`,
}

export const ContactsContainer = styled.div(({ theme, color }) => [
  tw`w-full gap-8 `,
  //variants
  ({ variant }) => ContactsVariant[variant],
  `background-color: ${theme.colors.bg.tertiary};`,

  color && `color: ${color};`,
  ,
])

export const StyledPara = tw.div`flex items-center`

export const StyledTitle = styled.div(({ theme, titleColor }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`text-[1.75rem] font-bold  `,
  titleColor && `color: ${titleColor};`,
])

export const StyledText = styled.div(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`text-[1.25rem] font-normal leading-[1.5rem] mr-[1.25rem] opacity-40 xs:hidden md:inline lg:inline`,
])

export const ContactsTitle = styled.div(({ withBorder, variant, theme }) => [
  // tw`w-full flex items-center justify-center relative mb-5`,
  withBorder &&
    `
&:after {
  content: "";
  position: absolute;
  bottom: -25px;
  height: 0.6rem;
  width: 8.75rem;
  background-color: ${theme.colors.bg.primary};
  border-radius: 20px;
}
`,

  variant === 'v1' && tw`w-full flex items-center justify-center relative mb-5`,

  variant === 'v2' && tw``,
])

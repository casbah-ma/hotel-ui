import tw, { styled } from 'twin.macro'

export const ContactsContainer = styled.div(({ theme }) => [
  tw`w-full h-[23.75rem] gap-8 flex flex-col items-center justify-center`,
  `background-color: ${theme.colors.bg.tertiary};`,
])

export const ContactsTitle = styled.div(({ withBorder, theme }) => [
  tw`w-full flex items-center justify-center relative mb-5`,
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
])

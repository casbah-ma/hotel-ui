import tw, { styled } from 'twin.macro'

export const ContactsContainer = styled.div(({ theme }) => [
  tw`w-full h-[23.75rem] gap-8 flex flex-col items-center justify-center`,
  `background-color: ${theme.colors.bg.tertiary};`,
])

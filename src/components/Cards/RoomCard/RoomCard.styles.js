import tw, { styled } from 'twin.macro'
export const containerVariants = {
  v1: tw`py-10 px-6 w-[22.5rem] max-w-max  rounded-xl gap-10 bg-[#fafafa]`,
  v2: tw`p-4 pb-16  max-w-max gap-6 shadow-card bg-white rounded-3xl`,
}
export const Container = styled.div(({ bgColor, theme }) => [
  tw`flex flex-col items-center justify-center`,
  ({ variant }) => containerVariants[variant],
  // bgColor
  //   ? `background-color: ${bgColor};`
  //   : `background-color: ${theme.colors.bg.tertiary};`,
])

export const StyledChildren = tw.div`
    w-full text-center py-6 last:pb-0 border-t border-b border-[#0000001F] last:border-b-0
`

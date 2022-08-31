import tw, { styled } from 'twin.macro'
export const containerVariants = {
  v1: tw`py-10 px-6 rounded-xl items-center justify-center gap-10 
  w-[18rem] md:w-[22.5rem]`,
  v2: tw`p-4 pb-16`,
}
export const Container = styled.div(({ bgColor, theme }) => [
  tw`flex flex-col`,
  ({ variant }) => containerVariants[variant],
  bgColor
    ? `background-color: ${bgColor};`
    : `background-color: ${theme.colors.bg.tertiary};`,
])

export const StyledChildren = tw.div`
    w-full text-center py-6 border-t border-b border-[#0000001F] last:border-b-0
`

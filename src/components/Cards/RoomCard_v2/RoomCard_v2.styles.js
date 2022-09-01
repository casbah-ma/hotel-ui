import tw, { styled } from 'twin.macro'

export const Container = styled.div(({ bgColor, theme }) => [
  tw`flex flex-col items-center justify-center [&>button]:mt-auto
  sm:w-[16.3rem] lg:w-[27.4rem] sm:min-h-[25.8rem] lg:min-h-[34rem]
  p-4 pb-16 gap-6 shadow-card bg-white rounded-3xl`,
  // bgColor
  //   ? `background-color: ${bgColor};`
  //   : `background-color: ${theme.colors.bg.tertiary};`,
])

export const StyledChildren = tw.div`
    w-full bg-[#FAFAFA] p-4 pr-1.5 lg:pr-2.5 lg:pt-6 lg:pb-9 rounded-3xl
`

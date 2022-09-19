import tw, { styled } from 'twin.macro'

export const Container = styled.div(({ bgColor, theme, color }) => [
  tw`grid grid-cols-5 items-center
  px-5 pt-4 pb-16 md:px-20 md:pt-6 md:pb-16
    lg:pt-10 lg:pb-[7.5rem] lg:px-[7.5rem] gap-10 md:gap-12 
    [&>h2]:col-span-5 md:[&>h2]:col-span-2 lg:[&>h2]:col-span-3 [&>h2]:self-start `,
  bgColor
    ? `background-color: ${bgColor};`
    : `background-color: ${theme.colors.bg.primary};`,
  color && `color: ${color};`,
])

export const Content = styled.div(() => [
  tw`flex flex-col justify-between gap-10
    col-start-2 col-span-4
    md:col-start-2 md:col-span-4 md:place-self-end lg:col-span-2 lg:pt-48`,
])

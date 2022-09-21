import { borderColors } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Container = styled.div(
  ({ bgColor, borderColor, color, theme }) => [
    //base styles
    tw`flex flex-col justify-center items-center rounded-lg
       max-w-min px-5 py-4 border-l-4 whitespace-nowrap`,
    //dynamic color
    color && `color: ${color};`,
    //dynamic background color
    bgColor
      ? `background-color: ${bgColor};`
      : `background-color: ${theme.colors.bg.primary};`,
    //dynamic border color
    ({ borderColor }) => borderColors[borderColor],
  ]
)

export const Number = styled.p(({ color, theme }) => [
  //base styles
  `font-family: ${theme.fontFamily.primary};`,
  tw`self-start  text-2xl md:text-4xl mb-2`,
])

export const Name = styled.p(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`text-xs md:text-sm`,
])

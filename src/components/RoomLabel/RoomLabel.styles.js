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

export const Number = tw.p`self-start font-primary text-2xl md:text-4xl mb-2`

export const Name = tw.p`font-secondary text-xs md:text-sm`

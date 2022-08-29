import { titleLeveles } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Heading = styled.h1(({ color, level, theme }) => [
  //base styles
  tw`font-primary font-bold tracking-wider`,
  //styles based on level
  ({ level }) => titleLeveles[level],
  //dynamic color
  color ? `color: ${color};` : `color: ${theme.colors.text.primary}`,
  // adjust font wieght for lower levels
  level > 3 && tw`font-semibold`,
])

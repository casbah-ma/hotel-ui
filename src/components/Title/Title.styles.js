import { titleLeveles } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Heading = styled.h1(({ color, level }) => [
  //base styles
  tw`font-bold text-black tracking-wider`,
  //styles based on level
  ({ level }) => titleLeveles[level],
  //dynamic color
  color && `color: ${color};`,
  // adjust font wieght for lower levels
  level > 3 && tw`font-semibold`,
])

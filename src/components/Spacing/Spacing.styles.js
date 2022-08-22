import {
  spacingTop,
  sapcingBottom,
  sapcingRight,
  sapcingLeft,
} from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Section = styled.section(({ mt, mb, pr, pl, centre }) => [
  tw`w-full flex`,
  centre && tw`justify-center`,
  ({ mt }) => spacingTop[mt],
  ({ mb }) => sapcingBottom[mb],
  ({ pr }) => sapcingRight[pr],
  ({ pl }) => sapcingLeft[pl],
])

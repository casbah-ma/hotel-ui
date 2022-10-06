import { fontSizes } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Description = styled.p(({ color, theme }) => [
  `font-family: ${theme.fontFamily?.secondary};`,
  tw` font-light  whitespace-pre-line xs:p-2`,
  ({ fontSize }) => fontSizes[fontSize],
  color && `color: ${color}`,
])

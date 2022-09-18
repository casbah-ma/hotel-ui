import { fontSizes } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Description = styled.p(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw` font-light  whitespace-pre-line`,
  ({ fontSize }) => fontSizes[fontSize],
])

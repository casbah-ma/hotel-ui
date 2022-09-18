import { fontSizes } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Description = styled.p(({ theme }) => [
  tw` font-light  whitespace-pre-line`,
  `font-family: ${theme.fontFamily.secondary};`,
  ({ fontSize }) => fontSizes[fontSize],
])

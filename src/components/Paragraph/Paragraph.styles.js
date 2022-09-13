import { fontSizes } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Description = styled.p(({ fontSize }) => [
  tw`font-secondary font-light  whitespace-pre-line`,
  ({ fontSize }) => fontSizes[fontSize],
])

import { labelFontSizes } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const LabelText = styled.span(({ fontSize }) => [
  tw`font-secondary`,
  ({ fontSize }) => labelFontSizes[fontSize],
])

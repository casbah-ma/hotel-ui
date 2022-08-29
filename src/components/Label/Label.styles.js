import { labelFontSizes } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const LabelText = styled.span(({ color, theme }) => [
  tw`font-secondary`,
  ({ fontSize }) => labelFontSizes[fontSize],
  color ? `color: ${color};` : `color: ${theme.colors.text.primary}`,
])

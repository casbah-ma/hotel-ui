import { labelFontSizes } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const LabelText = styled.span(
  ({ color, theme, textTransform, weight }) => [
    tw`font-primary`,
    ({ fontSize }) => labelFontSizes[fontSize],
    color ? `color: ${color};` : `color: ${theme.colors.text.primary}`,
    textTransform ? `text-transform: ${textTransform};` : ``,
    weight ? `font-weight: ${weight};` : ``,
  ]
)

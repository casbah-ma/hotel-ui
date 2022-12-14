import { titleLeveles } from '@/styles/theming'
import tw, { styled } from 'twin.macro'

export const Heading = styled.h1(({ color, level, theme, withLine }) => [
  //base styles
  tw`font-medium  relative xs:p-2 sm:p-0`,
  `font-family: ${theme.fontFamily.primary};`,
  //spacing
  `letter-spacing: ${theme.letterSpacing};`,
  //styles based on level
  ({ level }) => titleLeveles[level],
  //border bottom for v2
  withLine &&
    `
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -25px;
      height: 0.6rem;
      width: 8.75rem;
     
      background-color: ${theme.colors.bg.primary};
      border-radius: 20px;
    }

    @media only screen and (max-width: 600px) {
      &:after {
        margin-left:1rem;
      }
    }
   `,
  //dynamic color
  color ? `color: ${color};` : `color: ${theme.colors.text.primary}`,
  // adjust font wieght for lower levels
  level > 3 && tw`font-semibold`,
])

import tw, { styled } from 'twin.macro'

//Object variants
export const buttonsVariant = {
  primary: tw`rounded-full w-1/6  min-w-min whitespace-nowrap`,
  secondary: tw`rounded-xl w-1/6  min-w-min whitespace-nowrap`,
  rounded: tw`flex justify-center items-center p-1 md:p-1.5 lg:p-3 rounded-full`,
  horizontal: tw`flex flex-col justify-around items-center rounded-full focus:outline-none active:outline-none
      h-16 w-7 px-5 py-8 md:h-24 md:w-14 lg:h-36 lg:w-20`,
}

export const StyledButton = styled.button(
  ({ disabled, color, bgColor, theme, border }) => [
    //base style
    `font-family: ${theme.fontFamily.secondary};`,
    tw`px-3 py-3 lg:px-5 font-semibold text-sm 
    md:text-base lg:text-xl transform hover:scale-100 `,
    //variants
    ({ variant }) => buttonsVariant[variant],
    color ? `color: ${color};` : `color: ${theme.colors.text.secondary};`,
    bgColor
      ? `background-color: ${bgColor};`
      : `background-color: ${theme.colors.bg.primary};`,
    disabled && tw`bg-gray-100 text-black`,
    border && tw`border border-gray-700`,
  ]
)

export const StyledIcon = styled.span(({ variant, color }) => [
  color && `color: ${color}`,
  // rounded
  variant === 'rounded' && tw`w-3 md:w-3.5`,
  ///horizontal
  variant === 'horizontal' && tw`w-6 md:w-7`,
])

import tw, { styled } from 'twin.macro'

//Object variants
export const buttonsVariant = {
  primary: tw`rounded-full w-1/6 max-w-[160px] min-w-min whitespace-nowrap`,
  rounded: tw`flex justify-center items-center p-1 md:p-1.5 lg:p-3 rounded-full`,
  horizontal: tw`flex flex-col justify-around items-center rounded-full
      h-16 w-7 px-5 py-8 md:h-24 md:w-14 lg:h-36 lg:w-20`,
}

export const StyledButton = styled.button(
  ({ disabled, color, bgColor, theme }) => [
    //base style
    tw`py-3 px-5 border border-gray-700
    font-secondary font-semibold text-sm 
    md:text-base lg:text-xl transform hover:scale-100 `,
    //variants
    ({ variant }) => buttonsVariant[variant],
    color ? `color: ${color};` : `color: ${theme.colors.text.primary};`,
    bgColor
      ? `background-color: ${bgColor};`
      : `background-color: ${theme.colors.bg.primary};`,
    disabled && tw`bg-gray-100`,
  ]
)

export const StyledIcon = styled.span(({ variant, color }) => [
  color && `color: ${color}`,
  // rounded
  variant === 'rounded' && tw`w-3 md:w-3.5`,
  ///horizontal
  variant === 'horizontal' && tw`w-6 md:w-7`,
])

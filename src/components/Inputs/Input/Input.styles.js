import tw, { styled } from 'twin.macro'

export const InputContainer = tw.div`relative w-full`

export const StyledInput = styled.input(
  ({
    color,
    bgColor,
    error,
    isTextaria,
    withButton,
    theme,
    placeHolderColor,
  }) => [
    //base styles
    `font-family: ${theme.fontFamily.secondary};`,
    tw`
       w-full h-[4.25rem] p-2 pl-2 md:pl-6 rounded-xl
       border-b-2 border-solid 
       outline-none text-xs 
    `,
    bgColor
      ? `background-color: ${bgColor}`
      : `background-color: ${theme.colors.bg.tertiary};`,
    ,
    color
      ? `border-bottom-color: ${color};`
      : `border-bottom-color: ${theme.colors.bg.primary};`,
    ,
    placeHolderColor &&
      `::placeholder{
      color: #FFFFFF;
      opacity: 0.6;
    }`,
    error && tw`border-b-red-500`,
    withButton && `background-color: ${theme.colors.bg.colorgrey};`,
    isTextaria && tw`w-full min-h-[12.5rem] pt-[1.625rem] pl-6`,
  ]
)

export const InputButton = styled.button(
  ({ disabled, variant, color, bgColor, theme }) => [
    //base style
    `font-family: ${theme.fontFamily.secondary};`,
    tw`absolute  w-20 md:w-[6.75rem] h-[2.375rem] right-3  md:right-6 top-[0.938rem] border border-gray-700 
    font-semibold text-sm
    rounded-full max-w-[160px] min-w-min whitespace-nowrap
    `,
    //variants
    color ? `color: ${color}` : `color: ${theme.colors.bg.primary}`,
    bgColor
      ? `background-color: ${bgColor}`
      : `background-color: ${theme.colors.bg.primary};`,
    disabled && tw`bg-gray-100`,
  ]
)

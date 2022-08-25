import tw, { styled } from 'twin.macro'
import { borderBottomColors, bgColors, colors } from '@/styles/theming'

export const InputContainer = tw.div`relative w-full`

export const StyledInput = styled.input(
  ({ color, bgColor, error, isTextaria, withButton }) => [
    //base styles
    tw`
       w-full h-[4.25rem] p-2 pl-2 md:pl-6 rounded-xl
       border-b-2 border-solid font-secondary
       outline-none text-xs 
    `,
    bgColor ? `background-color: ${bgColor}` : tw`bg-tertiary`,
    color ? `border-bottom-color: ${color};` : tw`border-primary`,
    error && tw`border-b-red-500`,
    withButton && tw`bg-colorgrey`,
    isTextaria && tw`w-full min-h-[12.5rem] pt-[1.625rem] pl-6`,
  ]
)

export const InputButton = styled.button(
  ({ disabled, variant, color, bgColor }) => [
    //base style
    tw`absolute text-black w-20 md:w-[6.75rem] h-[2.375rem] right-3  md:right-6 top-[0.938rem] border border-gray-700 
    font-secondary font-semibold text-sm
    rounded-full max-w-[160px] min-w-min whitespace-nowrap
    `,
    //variants
    color && `color: ${color}`,
    bgColor
      ? `background-color: ${bgColor}`
      : `background-color: ${theme.colors.primary};`,
    disabled && tw`bg-gray-100`,
  ]
)

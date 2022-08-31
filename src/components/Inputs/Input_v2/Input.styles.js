import tw, { styled } from 'twin.macro'

export const InputContainer = tw.div`relative w-full`

export const Fieldset = tw.fieldset`absolute w-full`
export const Legend = tw.legend`absolute w-full`

export const StyledInput = styled.input(
  ({ color, bgColor, error, isTextaria, theme }) => [
    //base styles
    tw`
       w-full h-[4.25rem] p-2 pl-2 md:pl-6 rounded-xl
       border-[0.063rem] border-solid font-secondary
       outline-none text-xs 
    `,
    bgColor
      ? `background-color: ${bgColor}`
      : `background-color: ${theme.colors.bg.primary};`,
    ,
    color
      ? `border-color: ${color};`
      : `border-color: ${theme.colors.bg.primary};`,
    ,
    `&:focus{border-color: ${theme.colors.border.primary}}`,
    error && tw`border-red-500`,
    isTextaria && tw`w-full min-h-[4.375rem] pt-[1.625rem] pl-6`,
  ]
)

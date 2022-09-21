import tw, { styled } from 'twin.macro'

export const InputContainer = tw.div`relative w-full`

export const Placeholder = styled.label(
  tw`absolute left-0 p-[1.4rem]`,
  `pointer-events: none ;
  font-size:1em;
  transition: 0.5s`
)

export const StyledInput = styled.input(
  ({ color, bgColor, error, isTextaria, theme, size, focus }) => [
    //base styles
    tw`
       w-full h-[4.25rem] p-2 pl-2 md:pl-6 rounded-xl
       border-[0.063rem] border-solid
       outline-none text-base leading-7 relative
    `,
    bgColor
      ? `background-color: ${bgColor};`
      : `background-color: ${theme.colors.bg.primary};`,
    ,
    color
      ? `border-color: ${color};`
      : `border-color: ${theme.colors.bg.primary};`,
    ,
    focus
      ? `&:valid, &:focus{border-color: ${focus}};`
      : `&:valid, &:focus{border-color: ${theme.colors.border.primary}};`,

    focus
      ? `&:focus ~ label, &:valid ~ label{ 
        color: ${focus}; 
        font-size:1.2em;
        transform: translateX(22px) translateY(-12px);
        padding: 0 6px;
     }`
      : `&:focus ~ label, &:valid ~ label{
        color: ${theme.colors.border.primary};
        font-size:1.2em;
        transform: translateX(22px) translateY(-12px);
        padding: 0 6px;
        }`,

      bgColor ? `&:focus ~ label, &:valid ~ label{ 
        background: ${bgColor};
background: conic-gradient(from 90deg,${bgColor} 180deg, white 180deg);
    
     }` :
     `&:focus ~ label, &:valid ~ label{ 
      background: ${theme.colors.bg.primary};
background: conic-gradient(from 90deg,${theme.colors.bg.primary} 180deg, white 180deg);
    
   }`,
    error && tw`border-red-500`,

    isTextaria && tw`w-full min-h-[4.375rem] max-h-[15rem] pt-[1.2rem] pl-6 `,
    size ? `height: ${size}; resize: none` : ``,
  ]
)

export const StyledSpan = tw.span`
  absolute top-[1.538rem] right-[0.8rem] font-medium text-sm text-[#AEAEB1]
  `

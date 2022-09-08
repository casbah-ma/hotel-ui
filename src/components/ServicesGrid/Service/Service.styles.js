import tw, { styled } from 'twin.macro'

export const variants = {
  v1: tw`flex-col justify-center gap-6 text-center`,
  v2: tw`flex-row gap-7 lg:gap-11 justify-start py-7 pl-7 lg:py-9 lg:pl-9  
        w-[95%] lg:w-[34.4rem] rounded-2xl border border-[#DBDBDB]`,
  v3: tw`flex-row gap-4 justify-start items-start lg:gap-6 w-full md:w-[45%] md:max-w-[47%] lg:w-96 lg:max-w-sm 
          border-l pl-2 lg:pl-4`,
}
export const FlexWrapper = styled.div(({ variant, bgColor }) => [
  tw`flex items-center `,
  ({ variant }) => variants[variant],
  variant === 'v2' && `background-color: ${bgColor};`,
])
export const IconWrapper = styled.div(({ bgColor, theme, variant }) => [
  variant === 'v1' &&
    tw`flex justify-center items-center py-[2.5rem] px-[2.5rem] rounded-full`,
  variant === 'v3' &&
    tw`flex flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg justify-center items-center`,
  bgColor
    ? `background-color: ${bgColor};
       border-color: ${bgColor};`
    : `background-color: ${theme.colors.bg.tertiary};
      border-color:${theme.colors.bg.tertiary}`,
])

import tw, { styled } from 'twin.macro'

export const Container = styled.div(({ bgColor, theme }) => [
  tw`flex flex-col py-10 px-6 rounded-xl items-center justify-center gap-10 
     w-[18rem] md:w-[22.5rem]`,
  bgColor ? `background-color: ${bgColor};` : `${theme.colors.bg.tertiary};`,
])

export const StyledChildren = tw.div`
    w-full text-center py-6 border-t border-b border-[#0000001F] last:border-b-0
`

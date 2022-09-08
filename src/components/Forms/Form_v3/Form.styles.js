import tw, { styled } from 'twin.macro'

export const Formv2Container = tw.div`
  w-3/4 flex flex-col items-center justify-center
  gap-10

`

export const StyledButton = tw.div`
   w-full flex items-center justify-end
`

export const StyledLine = styled.div(({ theme }) => [
  tw`
  w-full h-[0.063rem]
    `,
  `background-color: ${theme.colors.bg.secondary};`,
])

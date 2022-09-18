import tw, { styled } from 'twin.macro'

export const Formv4Container = tw.div`
  w-3/4 flex flex-col items-center justify-center
  gap-10
`

export const FormContent = styled.div(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`w-full pt-[3rem] px-[2rem]
  flex flex-col
  outline-none text-xs gap-[2rem]
  font-medium
`,
])

export const QuantityField = styled.div(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw` w-full h-[4.25rem] p-2 pl-2 md:pl-6
  outline-none text-base leading-7 bg-[#FFFF]
  flex items-center font-bold
  `,
])

export const StyledLine = styled.div(({ theme }) => [
  tw`
  w-full h-[0.063rem]
    `,
  `background-color: ${theme.colors.bg.secondary};`,
])

export const TotalField = styled.div(({ theme }) => [
  `font-family: ${theme.fontFamily.secondary};`,
  tw`h-[4.25rem] p-2 pr-3 md:pl-6 rounded-xl
  text-base leading-7
  flex items-center font-bold
  `,
])

export const BottomField = tw.div`
flex items-center justify-between
`

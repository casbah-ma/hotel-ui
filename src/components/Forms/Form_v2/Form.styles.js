import tw, { styled } from 'twin.macro'

export const Formv2Container = styled.div(
  tw`
   lg:w-[57.875rem] h-[36.563rem] rounded-[1.5rem] flex flex-col justify-between
   md:w-[40.5rem]
   sm:w-[21.438rem]

`,
  `box-shadow: 2px 4px 24px 10px rgba(0, 0, 0, 0.04);`,
  `background-color: white`
)

export const FormContent = tw.div`
   w-full pt-[3rem] px-[2rem] flex flex-col
   outline-none gap-[2rem] font-normal 
`

export const StyledButton = styled.button(({ theme }) => [
  tw`
         w-full h-[5.188rem] text-white rounded-b-[1.5rem]
         font-secondary font-semibold text-[1.5rem] leading-[1.8rem]
    `,
  `background-color: ${theme.colors.border.primary};`,
])

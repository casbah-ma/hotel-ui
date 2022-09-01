import tw, { styled } from 'twin.macro'

export const OrderFormContainer = styled.div(
  tw`
   lg:w-[57.875rem] h-[36.563rem] rounded-[1.5rem] flex flex-col justify-between
   md:w-[40.5rem]
   sm:w-[21.438rem]

`,
  `box-shadow: 2px 4px 24px 10px rgba(0, 0, 0, 0.04);`
)

export const FormContent = tw.div`
   w-full pt-[3rem] px-[2rem]
   font-secondary flex flex-col
   outline-none text-xs gap-[2rem]
   font-medium
`

export const StyledButton = styled.button(({ theme }) => [
  tw`
         w-full h-[5.188rem] text-white rounded-b-[1.5rem]
         font-secondary font-semibold
    `,
  `background-color: ${theme.colors.border.primary};`,
])

export const QuantityField = tw.div`
w-full h-[4.25rem] p-2 pl-2 md:pl-6 rounded-xl
border-[0.063rem] border-solid font-secondary border-[#CBCBCB]
outline-none text-base leading-7 bg-[#FFFF]
flex items-center 
`

export const TotalField = tw.div`
w-full h-[4.25rem] p-2 pr-3 md:pl-6 rounded-xl
font-secondary outline-none text-base leading-7 bg-[#F8F8F8]
flex items-center justify-between
`
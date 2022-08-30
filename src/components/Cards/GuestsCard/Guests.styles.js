import tw, { styled } from 'twin.macro'

export const GuestBooking = styled.div(({ centred, theme }) => [
  tw`
    rounded-xl
    w-full md:w-2/3 h-full gap-11 p-5
    flex flex-col justify-center
`,
  centred && tw`items-center md:w-[30rem]`,
  `
background: ${theme.colors.DatesCore.background};
color: ${theme.colors.DatesCore.text};
`,
])
export const GuestValues = tw.div`
     w-4/5 gap-8 flex flex-col justify-center items-center
`

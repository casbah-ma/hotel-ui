import tw, { styled } from 'twin.macro'

// Desktop Booking Bar Styles
export const DesktopContainer = styled.section(({ theme }) => [
  tw`
        flex h-20 md:w-[48rem] lg:w-[72rem] rounded-full 
        divide-x justify-center items-center p-2 lg:p-4 shadow-card
    `,
  `background: ${theme.colors.DatesCore.bg};
   color: ${theme.colors.DatesCore.text};
  `,
])

export const Column = tw.div`
       w-full xs:h-16 md:h-full flex 
       justify-between items-center
      sm:p-1  md:p-4 cursor-pointer
    `
export const Row = tw.div`
    flex flex-col justify-center items-start
  `

export const Values = styled.span(({ theme, color }) => [
  tw`
   text-base leading-[1.2rem] md:text-xl md:leading-6 text-[#767676] font-medium 
  `,
  `
  color: ${color};
  `,
  `font-family: ${theme.fontFamily.secondary};`,
])

// Mobile Booking Bar Styles
export const MobileContainer = tw.section`
      w-[23.375rem]  pt-5 pb-5
     flex flex-col justify-around items-center
     transition ease-in-out duration-75  
`

export const MobileSection = styled.section(({ theme }) => [
  tw`flex h-16 w-full rounded-full 
  justify-center items-center mb-3 px-4 shadow-card`,
  `background: ${theme.colors.DatesCore.bg};
  color: ${theme.colors.DatesCore.text};
`,
])

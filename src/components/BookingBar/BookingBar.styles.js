import tw, { styled } from 'twin.macro'

// Desktop Booking Bar Styles
export const DesktopContainer = tw.section`
        flex bg-black h-20 md:w-[48rem] lg:w-[72rem] rounded-full text-white
        divide-x justify-center items-center p-2 lg:p-4 
    `
export const Column = tw.div`
       w-full xs:h-16 md:h-full flex 
       justify-between items-center
      sm:p-1  md:p-4
    `
// Mobile Booking Bar Styles
export const MobileContainer = tw.section`
      w-[23.375rem] h-full pt-5 pb-5
     flex flex-col justify-around items-center
     transition ease-in-out duration-75  
`
export const MobileSection = tw.section`
    flex bg-black h-16 w-full  rounded-full text-white
    justify-center items-center mb-3 px-4`

import tw from 'twin.macro'

export const GuestContainer = tw.section`w-[12rem] sm:w-[14rem] md:w-[8.75rem] xs:h-[3.375rem]  md:h-[3.188rem]
flex flex-col items-start justify-between gap-3`

export const GuestActionsContainer = tw.div`w-full flex items-center justify-between`
export const GuestActions = tw.div`xs:w-14 md:w-16 flex items-center justify-between 
[&>button]:w-6 [&>button]:h-6 [&>button]:[&>span]:[&>svg]:w-3`

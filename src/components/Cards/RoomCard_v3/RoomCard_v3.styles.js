import tw from 'twin.macro'

export const Container = tw.div`
  relative p-4 pb-32 lg:p-[4.25rem] lg:pb-40 flex flex-col gap-8 w-[17.8rem] h-[17.625rem] lg:w-[36rem] lg:h-[30rem] rounded-2xl 
`

export const ImageContainer = tw.div`
    absolute z-0 inset-0 before:content before:rounded-2xl before:absolute before:inset-0 before:z-20 
    before:background[linear-gradient(180deg, #000000 12.97%, rgba(0, 0, 0, 0) 100%)] 
`

export const InfoHeader = tw.div`
    flex flex-row justify-between items-center z-10
`
export const Subtitle = tw.span`
    flex font-bold text-xs lg:text-xl justify-center items-center bg-white px-4 py-3 rounded-full
`

export const StyledChildren = tw.div`
 z-20 text-white
`

import tw, { styled } from 'twin.macro'

export const Container = styled.div(({ imageSrc }) => [
  tw`flex flex-col p-4 lg:p-[4.25rem] w-[17.8rem] lg:w-[36rem] rounded-2xl [&>button]:mt-auto`,
  imageSrc
    ? tw`gap-8 text-white relative h-[17.625rem] lg:h-[30rem] pb-32 lg:pb-40`
    : tw`justify-start gap-9 min-h-[17.625rem] lg:min-h-[30rem] text-black bg-[#FAFAFA]`,
])

export const ImageContainer = tw.div`
    absolute z-0 inset-0 before:content before:rounded-2xl before:absolute before:inset-0 before:z-20 
    before:background[linear-gradient(180deg, #000000 12.97%, rgba(0, 0, 0, 0) 100%)] 
`

export const InfoHeader = tw.div`
    flex flex-row justify-between items-center z-10 
`
export const Subtitle = tw.span`
    flex font-bold text-xs lg:text-xl justify-center items-center bg-white text-black px-4 py-3 rounded-full
`

export const StyledChildren = tw.div`
 z-20 pr-[3rem] lg:pr-0
`

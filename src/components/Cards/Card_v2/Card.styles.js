import tw, { styled } from 'twin.macro'

export const CardContainer = styled.div(({ size }) => [
  tw`rounded-3xl p-4 pb-6 shadow-card
    flex flex-col justify-start items-center cursor-pointer
    `,
  size === 'sm' &&
    tw`xs:w-[16.25rem] lg:w-[21.5rem] xs:h-[25.813rem] lg:h-[34.063rem]`,
  size === 'md' &&
    tw`sm:w-[21.438rem] lg:w-[39.063rem] xs:h-[25.813rem] lg:h-[34.063rem] sm:pb-4 lg:pb-6`,
  size === 'lg' &&
    tw`sm:w-[21.438rem] md:w-[50rem] lg:w-[63.375rem] xs:h-[25.813rem] md:h-[30rem] lg:h-[31.563rem] sm:pb-4`,
])

export const CardImageContainer = styled.div(({ size }) => [
  tw`w-full rounded-xl`,
  size === 'sm' && tw`lg:w-[19.5rem] h-[16.813rem] lg:h-[22.25rem]`,
  size === 'md' && tw`lg:w-[37.063rem] h-[16.813rem] lg:h-[22.25rem]`,
  size === 'lg' && tw`lg:w-[61.375rem] h-[22.25rem]`,
])
export const CardInfosContainer = tw.div`w-full h-40 mt-2 md:mt-4 rounded-xl flex flex-col items-start justify-between`

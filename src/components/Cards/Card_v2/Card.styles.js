import tw, { styled } from 'twin.macro'

export const CardContainer = styled.div(({ size }) => [
  tw`rounded-3xl p-4 pb-6 shadow-card
    flex flex-col justify-start items-center cursor-pointer
    `,
  size === 'small' &&
    tw`xs:w-[16.25rem] lg:w-[21.5rem] xs:h-[25.813rem] lg:h-[34.063rem]`,
  size === 'medium' &&
    tw`sm:w-[21.438rem] lg:w-[39.063rem] xs:h-[25.813rem] lg:h-[34.063rem] sm:pb-4 lg:pb-6`,
  size === 'large' &&
    tw`sm:w-[21.438rem] lg:w-[63.375rem] xs:h-[25.813rem] lg:h-[31.563rem] sm:pb-4`,
])

export const CardImageContainer = styled.div(({ size }) => [
  tw`w-full rounded-xl`,
  size === 'small' && tw`lg:w-[19.5rem] h-[16.813rem] lg:h-[22.25rem]`,
  size === 'medium' && tw`lg:w-[37.063rem] h-[16.813rem] lg:h-[22.25rem]`,
  size === 'large' && tw`lg:w-[61.375rem] h-[22.25rem]`,
])
export const CardInfosContainer = tw.div`w-full h-40 mt-2 md:mt-4 rounded-xl flex flex-col items-start justify-between`

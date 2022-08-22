import tw, { styled } from 'twin.macro'
import { getImage } from '@/styles/helpers'

export const StyledCard = styled.section(({ direction }) => [
  tw`
        w-full  flex flex-col justify-between items-start
        rounded-lg cursor-pointer
    `,
  direction === 'vertical' &&
    tw`min-w-[16rem] sm:w-[21rem] lg:w-[25rem] flex flex-col justify-start items-start`,
])

export const CardImage = tw.div`flex w-full h-[21.375rem] rounded-lg object-cover`

export const CardAction = styled.section(({ direction }) => [
  tw`
      w-full flex justify-between items-start 
       mt-4
    `,
  direction === 'vertical' &&
    tw`flex flex-col justify-start items-start w-full h-full`,
])

export const CardLink = styled.section(({ src, direction }) => [
  tw`
    text-black self-end mb-2  cursor-pointer `,
  direction === 'vertical' && tw`flex self-start mt-4`,
])

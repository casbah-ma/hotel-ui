import tw, { styled } from 'twin.macro'

export const StyledCard = styled.section(({ direction }) => [
  tw`
    w-full lg:w-[50rem] flex flex-col justify-between items-start
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

export const CardLink = styled.section(({ direction, theme }) => [
  tw`
  self-end mb-2  cursor-pointer `,
  direction === 'vertical' && tw`flex self-start mt-4`,
  `color: ${theme.colors.bg.primary}`,
])

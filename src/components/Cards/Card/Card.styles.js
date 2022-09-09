import tw, { styled } from 'twin.macro'

export const StyledCard = styled.section(({ direction, size }) => [
  tw`
   flex flex-col justify-between items-start
    rounded-lg cursor-pointer
    `,
  size === 'sm' && tw`xs:w-[17.5rem] sm:w-[21rem] md:w-[35rem]`,
  size === 'lg' && tw`xs:w-[17.5rem] sm:w-[21rem] md:w-[50rem] sm:pb-4`,
  direction === 'vertical' &&
    tw`min-w-[16rem] sm:w-[21rem] md:w-[25rem] justify-start items-start`,
])

export const CardImage = tw.div`flex w-full h-[21.375rem] rounded-lg object-cover`

export const CardAction = styled.section(({ direction, size }) => [
  tw`
      w-full flex justify-between items-start 
       mt-4
    `,
  direction === 'vertical' && tw`flex flex-col justify-start items-start `,
  size === 'lg' && tw`[&>p]:w-[24.5rem]`,
])

export const CardLink = styled.section(({ direction, theme }) => [
  tw`
  self-start md:self-end mb-2  cursor-pointer `,
  direction === 'vertical' && tw`flex md:self-start mt-4`,
  `color: ${theme.colors.bg.primary}`,
])

export const CardDate = tw.div`mt-5`

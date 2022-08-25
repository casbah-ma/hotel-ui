import tw, { styled } from 'twin.macro'

export const StyledHeader = styled.header(({ isContact, theme }) => [
  tw`w-full flex flex-col md:flex-row items-start justify-start`,
  isContact && tw`pt-[4.75rem] pb-[5.375rem] pl-[7.5rem]`,
  `background-color: ${theme.colors.tertiary};`,
])
//inline block is a must to make the div take no bigger width than the content
//max-width is to avoid pushing the description to much to the left, if it makes spacing problem we can remove it later
export const TitleWrapper = tw.div`
  inline-block
`

export const DescriptionWrapper = tw.div`
  // div container
  w-full relative pt-5 mt-5
  // border top on small mobiles
  before:content-[""] before:absolute before:left-0 before:top-0
  before:h-[1px] before:w-1/4 before:bg-black before:md:h-0
  // border-left on large screens
  md:w-2/5 md:pt-0 md:mt-0 md:border-l md:border-l-black md:pl-9 md:ml-8 md:self-end
`
export const ContactItem = tw.div`
  w-full flex gap-2 
`

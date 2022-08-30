import tw, { styled } from 'twin.macro'

export const StyledHeader = styled.header(
  ({ isContact, theme, direction, withBorder }) => [
    direction === 'horizontal' &&
      tw`w-full flex flex-col md:flex-row items-start justify-start`,
    isContact && tw`pt-[4.75rem] pb-[5.375rem] pl-[7.5rem]`,
    isContact && `background-color: ${theme.colors.bg.tertiary};`,
    direction === 'vertical' &&
      withBorder &&
      tw`w-full flex flex-col gap-10 items-center justify-center text-center`,
  ]
)

//inline block is a must to make the div take no bigger width than the content
//max-width is to avoid pushing the description to much to the left, if it makes spacing problem we can remove it later
export const TitleWrapper = tw.div`
  inline-block
`

export const DescriptionWrapper = styled.div(
  ({ direction, theme, withBorder }) => [
    // div container
    tw`w-full md:w-[70%] relative pt-4 mt-4 md:pt-0 md:mt-2`,
    //spacing on modible
    !withBorder && tw`pt-0 mt-1.5`,
    // border top on small mobiles
    direction === 'horizontal' &&
      tw`before:content-[""] before:absolute before:left-0 before:top-0
  before:h-[1px] before:w-1/4 before:bg-black before:md:h-0`,
    // border-left on large screens
    direction === 'horizontal' &&
      tw`md:w-2/5 md:pt-0 md:mt-0 md:border-l md:border-l-black md:pl-9 md:ml-8 md:self-end`,
    //border top for vertical version
    direction === 'vertical' &&
      withBorder &&
      `
        padding: 0;
        margin: 0;
        &:before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -25px;
          height: 0.6rem;
          width: 8.75rem;
          background-color: ${theme.colors.text.primary};
          border-radius: 20px;
  }
 `,
  ]
)

export const ContactItem = tw.div`
  w-full flex gap-2 
`

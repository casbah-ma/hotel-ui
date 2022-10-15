import tw, { styled } from 'twin.macro'

export const NavbarContainer = styled.div(
  ({ bgColor, color, isHidden, transparent, hasBackground }) => [
    isHidden && tw`invisible`,
    tw`bg-white fixed z-30 top-8 w-[90%] lg:w-[96%] mx-auto flex flex-row items-center justify-between 
      pl-[0.813rem]  lg:pl-[57px] pr-[22px] py-[23px]  shadow-card rounded-3xl`,
    transparent &&
      tw`bg-transparent shadow-none w-full lg:justify-start items-center  lg:px-12
      [&>nav]:mr-auto [&>nav]:border-l  [&>nav]:pl-[62px] [&>nav]:ml-5`,

    hasBackground && tw`py-4 bg-white shadow-xl`,
    bgColor && `background-color: ${bgColor};`,
    color &&
      `color: ${color}; 
      nav{
        border-color: ${color};
      }
      `,
  ]
)

export const Nav = tw.nav`hidden lg:flex justify-center items-center`

export const LinksList = tw.ul`
    flex flex-col w-full whitespace-nowrap gap-6
    lg:flex lg:flex-row lg:gap-6 lg:justify-center lg:items-center  
`

export const ListItem = tw.li`
border-b border-black pb-2 lg:pb-0 lg:border-0 cursor-pointer hover:opacity-50
`

export const LanguageMenu = tw.div`
 flex flex-row gap-1.5 justify-center items-center
`
export const ButtonWithLanguages = tw.div`
   hidden lg:flex flex-row gap-6 justify-center items-center text-white
`

export const Menu = tw.div`
 block lg:hidden cursor-pointer w-8 
`

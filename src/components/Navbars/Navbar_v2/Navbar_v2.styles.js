import tw, { styled } from 'twin.macro'

export const NavbarContainer = styled.nav(
  ({ bgColor, color, isHidden, transparent, hasBackground }) => [
    isHidden && tw`invisible`,
    tw`bg-white fixed z-10 top-8 w-[90%] lg:w-[96%] mx-auto flex flex-row items-center justify-between 
       px-7 py-6 lg:pl-[3.4rem] lg:pr-3 shadow-card rounded-3xl`,
    transparent &&
      tw`bg-transparent shadow-none w-full lg:justify-start items-center  lg:px-12
      [&>nav]:mr-auto [&>nav]:border-l [&>nav]:border-black [&>nav]:pl-5 [&>nav]:ml-5`,
    hasBackground && tw`py-4 bg-white shadow-xl`,
    bgColor && `background-color: ${bgColor};`,
    color && `color: ${color};`,
  ]
)

export const Nav = tw.nav`hidden lg:flex justify-center items-center`

export const LinksList = tw.ul`
    flex flex-col w-full whitespace-nowrap gap-4
    lg:flex lg:flex-row lg:gap-4 lg:justify-center lg:items-center  
`

export const ListItem = tw.li`
border-b border-black pb-2 lg:pb-0 lg:border-0 cursor-pointer hover:opacity-50
`

export const LanguageMenu = tw.div`
 flex flex-row gap-1.5 justify-center items-center
`
export const ButtonWithLanguages = tw.div`
   hidden lg:flex flex-row gap-6 justify-center items-center
`

export const Menu = tw.div`
 block lg:hidden cursor-pointer w-8 
`

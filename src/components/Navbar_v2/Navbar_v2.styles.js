import tw, { styled } from 'twin.macro'

export const NavbarContainer = styled.nav(({ bgColor, color, isHidden }) => [
  isHidden && tw`invisible`,
  tw`w-[96%] mx-auto flex flex-row items-center justify-between 
  pl-6 pr-7 py-6 lg:pl-[3.4rem] lg:pr-3 shadow-card rounded-3xl`,
  bgColor && `background-color: ${bgColor};`,
  color && `color: ${color};`,
])

export const Nav = tw.nav`
    hidden lg:flex justify-center items-center
`
export const LinksList = tw.ul`
    flex flex-col w-full whitespace-nowrap gap-4
    lg:flex lg:flex-row lg:gap-4 lg:justify-center lg:items-center  
`

export const ListItem = tw.li`
border-b border-black pb-2 lg:border-0 cursor-pointer hover:opacity-50
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

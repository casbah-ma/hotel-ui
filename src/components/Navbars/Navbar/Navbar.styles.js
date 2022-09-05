import tw, { styled } from 'twin.macro'

export const NavbarContainer = styled.nav(
  ({ bgColor, color, isHidden, hasBackground }) => [
    isHidden && tw`invisible`,
    tw`font-semibold text-black fixed z-10 top-0 w-full hidden lg:flex justify-between items-center py-10 px-12`,
    hasBackground && tw`py-4 bg-white shadow-xl`,
    bgColor && `background-color: ${bgColor};`,
    color && `color: ${color};`,
    ,
  ]
)

export const Menu = tw.button`
    fixed z-10 top-6 right-6 w-10 h-10 cursor-pointer block lg:hidden
`

export const Nav = tw.nav`
 absolute left-[50%] origin-center translate-x-[-50%]
`

export const List = styled.ul(({ position }) => [
  tw`absolute top-[50%] origin-center translate-y-[-50%] whitespace-nowrap
    flex justify-center items-center gap-5 h-full`,
  position === 'left' && tw`right-[205px]`,
  position === 'right' && tw`left-[205px]`,
])

export const Logo = tw.div`bg-opacity-0 mt-2 w-[11rem] h-[4rem]`

// mobile
export const MobileNav = tw.nav`flex flex-col lg:hidden items-start justify-center gap-2.5`

export const MobileLogo = tw.div`absolute  object-contain top-4 left-6 w-24 h-20 cursor-pointer block lg:hidden`

export const MobileList = tw.ul`flex w-full flex-col gap-4 items-center justify-center`

export const MobileItem = tw.li`w-full border-b border-black pb-2 cursor-pointer hover:opacity-50`

export const ListItem = tw.li`cursor-pointer hover:opacity-50`

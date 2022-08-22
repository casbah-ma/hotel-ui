import tw, { styled } from 'twin.macro'

export const List = tw.ul`
    w-16 flex flex-col gap-2 py-4 absolute justify-center items-center sm:left-[0.5px] mt-2 origin-top-right 
    divide-y divide-gray-100 rounded-md bg-white ring-black shadow-2xl ring-opacity-5 focus:outline-none
`

export const ListItem = styled.li(({ active }) => [
  tw`flex justify-start items-center cursor-pointer w-full px-4 py-1 first:pt-0 last:pb-0`,
  active && tw`bg-blue-300`,
])

export const ToggleButton = styled.div(({ open }) => [
  !open && tw`transform transition-transform duration-500 `,
  open && tw`transform transition-transform duration-500 rotate-180`,
])

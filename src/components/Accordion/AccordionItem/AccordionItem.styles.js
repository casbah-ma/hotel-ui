import tw, { styled } from 'twin.macro'

export const Item = tw.div`
font-secondary text-xl text-black leading-6 
w-full flex flex-col justify-center mx-auto
border-t border-black
last:border-b
`
export const ItemName = styled.button(({ isOpened }) => [
  tw`w-full flex flex-row justify-between items-center py-4`,
])

export const ItemContent = styled.div(({ isOpened }) => [
  tw`mt-2`,
  tw`max-h-0 overflow-hidden`,
  isOpened &&
    tw`max-h-[1000px] transition-[max-height] ease-linear duration-[3s]`,
])

export const ArrowIcon = styled.span(({ isOpened }) => [
  tw`w-5 h-5 transform transition ease-linear duration-300`,
  isOpened && tw`rotate-180`,
])

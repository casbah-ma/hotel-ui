import tw, { styled } from 'twin.macro'

export const variants = {
  version1: tw`border-t border-black last:border-b`,
  version2: tw`border border-[#DBDBDB] rounded-xl mb-4`,
}

const contentVariants = {
  version1: tw`pb-4 px-6`,
  version2: tw`border-t border-[#DBDBDB] py-4 pl-6 pr-28 w-full`,
}

export const Item = styled.div(() => [
  tw`font-secondary text-xl text-black leading-6 w-full flex flex-col justify-center items-center mx-auto`,
  ({ variant }) => variants[variant],
])
export const ItemName = styled.button(({ isOpened }) => [
  tw`w-full flex flex-row justify-between items-center py-4 px-6`,
])

export const ItemContent = styled.div(({ isOpened }) => [
  tw`max-h-0 overflow-hidden`,
  ({ variant }) => (isOpened ? contentVariants[variant] : null),
  isOpened &&
    tw`max-h-[1000px] transition-[max-height] ease-linear duration-[3s]`,
])

export const ArrowIcon = styled.span(({ isOpened }) => [
  tw`w-5 h-5 transform transition ease-linear duration-300`,
  isOpened && tw`rotate-180`,
])

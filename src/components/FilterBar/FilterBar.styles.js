import tw, { styled } from 'twin.macro'

export const variants = {
  v1: tw`w-[95%] justify-start border-b border-gray-300`,
  v2: tw`gap-3`,
  v3: tw`pb-0 mr-10`,
}
export const CategoriesList = styled.ul(() => [
  tw`flex min-w-min flex-nowrap overflow-x-auto`,
  ({ variant }) => variants[variant],
])

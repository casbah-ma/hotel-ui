import tw, { styled } from 'twin.macro'

export const FlexWrapper = tw.div`
    flex flex-col justify-center items-center gap-6 text-center
`
export const IconCircle = styled.div(({ circleBg }) => [
  tw`flex justify-center items-center py-[2.5rem] px-[2.5rem] rounded-full`,
  circleBg ? `background-color: ${circleBg};` : tw`bg-tertiary`,
])

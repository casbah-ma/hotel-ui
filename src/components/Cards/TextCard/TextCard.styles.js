import tw, { styled } from 'twin.macro'

export const ContainerVariant = {
  smallWithText: tw`w-[18.5rem] lg:w-[28rem] h-[19.8rem] lg:h-[30rem]`,
  largeWithText: tw`w-[18.520.3rem] lg:w-[31.25rem] h-[19.8rem] lg:h-[30rem]`,
}

export const Container = styled.div(() => [
  tw`relative`,
  ({ variant }) => ContainerVariant[variant],
])

export const ImageWrapper = tw.div`
    absolute min-w-max z-0 inset-0 before:content before:rounded-2xl before:absolute before:inset-0 before:z-20 
    before:background[linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%)] 
`

export const Text = tw.article`
    absolute w-10/12 lg:w-[60%] left-4 lg:left-10 bottom-8 
`

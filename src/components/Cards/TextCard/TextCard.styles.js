import tw, { styled } from 'twin.macro'

export const ImageWrapper = styled.div(({ color, gradient }) => [
  tw`
    relative inline-block z-0  before:content before:rounded-2xl before:absolute before:inset-0 before:z-10 
    
`,
  color && gradient
    ? `   &:before {
    background: linear-gradient(180deg,  rgba(0, 0, 0, 0) 0%, ${color} 100%);
}
`
    : gradient
    ? tw`before:background[linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%)] `
    : '',
])
export const Text = tw.article`
    absolute w-10/12 lg:w-[60%] left-4 lg:left-10 bottom-8 z-20
`

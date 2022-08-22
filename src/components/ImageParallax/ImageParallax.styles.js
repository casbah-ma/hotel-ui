import tw, { styled } from 'twin.macro'

export const Parallax = styled.section`
  background-image: ${({ src }) => `url(${src})`};
  ${tw`w-full h-screen mb-12 bg-fixed bg-center bg-cover`}
`

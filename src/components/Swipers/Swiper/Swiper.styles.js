import tw, { styled } from 'twin.macro'

export const SwiperContainer = tw.section`   
    w-full h-full flex flex-col justify-start items-start
    mx-auto gap-10 
`
SwiperContainer.defaultProps = { className: 'group' }

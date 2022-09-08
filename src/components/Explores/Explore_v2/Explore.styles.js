import tw, { styled } from 'twin.macro'

export const ExploreContainer = tw.div`w-full h-full flex flex-col items-start justify-start gap-10 p-2`
export const ExploreCards = tw.div`grid grid-cols-1 md:grid-cols-2 gap-8 `
export const ExploreCard = styled.div(({}) => [
  tw`w-full flex items-end justify-end gap-2`,
  `&:nth-child(2) {
    item-align: start;
    justify-content: start;
  }`,
])

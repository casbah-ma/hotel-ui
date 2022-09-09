import {
  StyledCard,
  CardImage,
  CardAction,
  CardLink,
  CardDate,
} from './Card.styles'
import ArrowRight from '@/components/Icons/ArrowRight'
import { isEmpty } from '@/helpers/utils'
import Paragraph from '@/components/Paragraph'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks'
import Label from '@/components/Label'
import { PropTypes } from 'prop-types'
import LinkComponent from '@/components/LinkComponent'

// Optimize image size for each breakpoint
const getSize = (size) => {
  switch (size) {
    case 'sm':
      return {
        xs: { width: 280, height: 172 },
        sm: { width: 336, height: 172 },
        md: { width: 560, height: 380 },
        lg: { width: 560, height: 380 },
      }
    case 'lg':
      return {
        xs: { width: 280, height: 172 },
        sm: { width: 336, height: 172 },
        md: { width: 800, height: 400 },
        lg: { width: 800, height: 380 },
      }
    default:
      return { width: 340, height: 380 }
  }
}

// get image variant breakpoints
const getBreakpoint = (size, bp) => {
  const sizes = getSize(size)
  return sizes[bp]
}

const Card = function ({ size, linkCard, image, direction }) {
  const { description, link } = linkCard
  const bp = useBreakpoint()
  console.log(size)
  return (
    <LinkComponent {...link}>
      <StyledCard data-testid="category-card" direction={direction} size={size}>
        <CardImage direction={direction}>
          <Image
            className="radius-lg"
            src={image}
            width={getBreakpoint(size, bp) ? getBreakpoint(size, bp).width : 0}
            height={
              getBreakpoint(size, bp) ? getBreakpoint(size, bp).height : 0
            }
            alt="card"
            objectFit="cover"
          />
        </CardImage>
        {!isEmpty(linkCard) && (
          <CardAction direction={direction} size={size}>
            <Paragraph description={description} />
            <CardLink direction={direction}>
              <ArrowRight width={49} height={19} />
            </CardLink>
          </CardAction>
        )}
        <CardDate>
          <Label labelText="Posted in 20 March 2022" />
        </CardDate>
      </StyledCard>
    </LinkComponent>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  linkCard: PropTypes.shape({
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}
export default Card

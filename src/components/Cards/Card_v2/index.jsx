import PropTypes from 'prop-types'
import {
  CardContainer,
  CardImageContainer,
  CardInfosContainer,
} from './Card.styles'
import Image from 'next/image'
import Paragraph from '@/components/Paragraph'
import Label from '@/components/Label'
import { useBreakpoint } from '@/hooks'
import LinkComponent from '@/components/LinkComponent'

// Optimize image size for each breakpoint
const getSize = (size) => {
  switch (size) {
    case 'sm':
      return {
        xs: { width: 340, height: 380 },
        sm: { width: 340, height: 380 },
        md: { width: 340, height: 340 },
        lg: { width: 340, height: 380 },
      }
    case 'md':
      return {
        xs: { width: 340, height: 290 },
        sm: { width: 340, height: 290 },
        md: { width: 593, height: 400 },
        lg: { width: 593, height: 380 },
      }
    case 'lg':
      return {
        xs: { width: 340, height: 290 },
        sm: { width: 340, height: 290 },
        md: { width: 593, height: 400 },
        lg: { width: 982, height: 380 },
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

function Card_v2({ size, image, date, description, link }) {
  const bp = useBreakpoint()
  return (
    <LinkComponent {...link}>
      <CardContainer size={size}>
        <CardImageContainer>
          <Image
            className="radius-xl"
            role="img"
            src={image}
            alt="Card_image"
            width={getBreakpoint(size, bp) ? getBreakpoint(size, bp).width : 0}
            height={
              getBreakpoint(size, bp) ? getBreakpoint(size, bp).height : 0
            }
            objectFit="cover"
          />
        </CardImageContainer>
        <CardInfosContainer data-testid="info">
          <Paragraph description={description} fontSize="rg" />
          {date && <Label labelText={date} />}
        </CardInfosContainer>
      </CardContainer>
    </LinkComponent>
  )
}

Card_v2.propTypes = {
  size: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default Card_v2

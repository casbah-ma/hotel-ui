import { useBreakpoint } from '@/hooks'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
//styles
import { imageVariants, StyledImage } from './ImageCard.styles'

// Shapes sizes for each image variant
const imageVariantsShapes = {
  shape1: {
    sm: { width: 400, height: 512 },
    md: { width: 368, height: 512 },
    lg: { width: 400, height: 512 },
  },
  shape2: {
    sm: { width: 368, height: 342 },
    md: { width: 368, height: 342 },
    lg: { width: 520, height: 342 },
  },
  shape3: {
    sm: { width: 480, height: 384 },
    md: { width: 480, height: 384 },
    lg: { width: 520, height: 384 },
  },
  imageVerticalTall: {
    sm: { width: 400, height: 488 },
    md: { width: 420, height: 600 },
    lg: { width: 500, height: 600 },
  },
  //for blog_V2
  imageHorizontal: {
    sm: { width: 360, height: 352 },
    md: { width: 310, height: 372 },
    lg: { width: 550, height: 480 },
  },
  //Bottom Image for blog_V1
  imageFlexible: {
    sm: { width: 360, height: 500 },
    md: { width: 1000, height: 1000 },
    lg: { width: 1500, height: 600 },
  },
  //For Cards
  small: {
    sm: { width: 360, height: 248 },
    md: { width: 360, height: 248 },
    lg: { width: 360, height: 248 },
  },
  //for blog V3
  imageVertical: {
    sm: { width: 236, height: 262 },
    md: { width: 280, height: 310 },
    lg: { width: 540, height: 600 },
  },
  extraSmall: {
    sm: { width: 118, height: 131 },
    md: { width: 131, height: 151 },
    lg: { width: 332, height: 258 },
  },
}

// get image variant breakpoints
const getVariant = (variant, bp) => {
  const imageShape = imageVariantsShapes[variant]
  return imageShape[bp]
}

const ImageCard = function ({ variant, src }) {
  const bp = useBreakpoint()
  return (
    <StyledImage variant={variant} src={src}>
      <Image
        className="radius-xl"
        width={getVariant(variant, bp) ? getVariant(variant, bp).width : 0}
        height={getVariant(variant, bp) ? getVariant(variant, bp).height : 0}
        src={src}
        objectFit="cover"
        alt="image"
      />
    </StyledImage>
  )
}

ImageCard.propTypes = {
  variant: PropTypes.oneOf(Object.keys(imageVariants)),
  src: PropTypes.string.isRequired,
}

export default ImageCard

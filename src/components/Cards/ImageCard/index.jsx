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
    lg: { width: '520', height: 342 },
  },
  shape3: {
    sm: { width: 480, height: 384 },
    md: { width: 480, height: 384 },
    lg: { width: '520', height: 384 },
  },
  shape4: {
    sm: { width: 152, height: 158 },
    md: { width: 246, height: 255 },
    lg: { width: '316.19', height: 327.6 },
  },
  shape5: {
    sm: { width: 264, height: 158 },
    md: { width: 425, height: 255 },
    lg: { width: '546', height: 327.6 },
  },
  shape6: {
    sm: { width: 296, height: 317 },
    md: { width: 296, height: 317 },
    lg: { width: '420', height: 488 },
  },
  imageVerticalTall: {
    sm: { width: 500, height: 488 },
    md: { width: 320, height: 600 },
    lg: { width: '500', height: 600 },
  },
  imageFlexible: {
    sm: { width: '360', height: 500 },
    md: { width: '1000', height: 1000 },
    lg: { width: '1500', height: 600 },
  },
  small: {
    sm: { width: '360', height: '248' },
    md: { width: '360', height: '248' },
    lg: { width: '360', height: '248' },
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

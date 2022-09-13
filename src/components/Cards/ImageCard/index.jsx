import { useBreakpoint } from '@/hooks'
import Image from 'next/image'
import PropTypes from 'prop-types'

//styles

// Shapes sizes for each image variant
const imageVariantsShapes = {
  shape1: {
    xs: { width: 400, height: 512 },
    sm: { width: 400, height: 512 },
    md: { width: 368, height: 512 },
    lg: { width: 400, height: 512 },
  },
  shape2: {
    xs: { width: 368, height: 342 },
    sm: { width: 368, height: 342 },
    md: { width: 368, height: 342 },
    lg: { width: 520, height: 342 },
  },
  shape3: {
    xs: { width: 480, height: 384 },
    sm: { width: 480, height: 384 },
    md: { width: 480, height: 384 },
    lg: { width: 520, height: 384 },
  },
  shape4: {
    xs: { width: 152, height: 158 },
    sm: { width: 152, height: 158 },
    md: { width: 246, height: 255 },
    lg: { width: 316.19, height: 327.6 },
  },
  shape5: {
    xs: { width: 264, height: 158 },
    sm: { width: 264, height: 158 },
    md: { width: 425, height: 255 },
    lg: { width: 546, height: 327.6 },
  },
  shape6: {
    xs: { width: 296, height: 317 },
    sm: { width: 296, height: 317 },
    md: { width: 296, height: 317 },
    lg: { width: 420, height: 488 },
  },
  imageVerticalTall: {
    xs: { width: 400, height: 488 },
    sm: { width: 400, height: 488 },
    md: { width: 420, height: 600 },
    lg: { width: 500, height: 600 },
  },
  // for TextCard
  smallWithText: {
    xs: { width: 296, height: 317 },
    sm: { width: 296, height: 317 },
    md: { width: 296, height: 317 },
    lg: { width: 448, height: 480 },
  },
  largeWithText: {
    xs: { width: 325, height: 317 },
    sm: { width: 325, height: 317 },
    md: { width: 325, height: 317 },
    lg: { width: 580, height: 480 },
  },
  //for blog_V2
  imageHorizontal: {
    xs: { width: 360, height: 352 },
    sm: { width: 360, height: 352 },
    md: { width: 310, height: 372 },
    lg: { width: 550, height: 480 },
  },
  //Bottom Image for blog_V1
  imageFlexible: {
    xs: { width: 360, height: 500 },
    sm: { width: 360, height: 500 },
    md: { width: 1000, height: 1000 },
    lg: { width: 1500, height: 600 },
  },
  //For Room Cards
  medium: {
    xs: { width: 285, height: 282 },
    sm: { width: 285, height: 282 },
    md: { width: 285, height: 282 },
    lg: { width: 576, height: 480 },
  },
  small: {
    xs: { width: 360, height: 248 },
    sm: { width: 360, height: 248 },
    md: { width: 360, height: 248 },
    lg: { width: 360, height: 248 },
  },
  smallHorizontal: {
    xs: { width: 228, height: 161 },
    sm: { width: 228, height: 161 },
    md: { width: 228, height: 161 },
    lg: { width: 407, height: 234 },
  },
  //for blog V3
  imageVertical: {
    xs: { width: 236, height: 262 },
    sm: { width: 236, height: 262 },
    md: { width: 280, height: 310 },
    lg: { width: 540, height: 600 },
  },
  extraSmall: {
    xs: { width: 118, height: 131 },
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

const getBorderImage = (imagePosition) => {
  switch (imagePosition) {
    case 'left':
      return { borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }
    case 'right':
      return { borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }
    default:
      return {}
  }
}

const ImageCard = function ({ variant, src, imagePosition }) {
  const bp = useBreakpoint()
  return (
    <Image
      className={!imagePosition && 'rounded-xl'}
      style={getBorderImage(imagePosition)}
      width={getVariant(variant, bp) ? getVariant(variant, bp).width : 0}
      height={getVariant(variant, bp) ? getVariant(variant, bp).height : 0}
      src={src}
      objectFit="cover"
      alt="image"
    />
  )
}

ImageCard.propTypes = {
  variant: PropTypes.oneOf(Object.keys(imageVariantsShapes)),
  src: PropTypes.string.isRequired,
}

export default ImageCard

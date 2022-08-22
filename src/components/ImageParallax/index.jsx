import PropTypes from 'prop-types'
import { Parallax } from './ImageParallax.styles'
//components

function ImageParallax({ src }) {
  return <Parallax src={src} />
}

ImageParallax.propTypes = {
  imagesrc: PropTypes.string.isRequired,
}

export default ImageParallax

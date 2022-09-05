import PropTypes from 'prop-types'
import { ImageCard } from '@/components/Cards'
//components
import { Text, ImageWrapper } from './TextCard.styles'
import Label from '../../Label'

function TextCard({ src, variant, text }) {
  return (
    <ImageWrapper>
      <ImageCard src={src} variant={variant} />
      <Text>
        <Label color="white" labelText={text} fontSize="sm" />
      </Text>
    </ImageWrapper>
  )
}

TextCard.propTypes = {
  variant: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default TextCard

import PropTypes from 'prop-types'
import { ImageCard } from '@/components/Cards'
import Paragraph from '@/components/Paragraph'
//components
import { Container, Text, ImageWrapper } from './TextCard.styles'
import Label from '../../Label'

function TextCard({ src, variant, text }) {
  return (
    <Container variant={variant}>
      <ImageWrapper>
        <ImageCard src={src} variant={variant} />
      </ImageWrapper>
      <Text>
        <Label color="white" labelText={text} fontSize="sm" />
      </Text>
    </Container>
  )
}

TextCard.propTypes = {
  variant: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default TextCard

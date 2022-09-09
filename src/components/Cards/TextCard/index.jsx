import PropTypes from 'prop-types'
import { ImageCard } from '@/components/Cards'
//components
import { Text, ImageWrapper } from './TextCard.styles'
import Label from '../../Label'
import LinkComponent from '../../LinkComponent'

function TextCard({ src, variant, text, link }) {
  return (
    <LinkComponent {...link}>
      <ImageWrapper>
        <ImageCard src={src} variant={variant} />
        <Text>
          <Label color="white" labelText={text} fontSize="sm" />
        </Text>
      </ImageWrapper>
    </LinkComponent>
  )
}

TextCard.propTypes = {
  variant: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.shape(LinkComponent.propTypes),
}

export default TextCard

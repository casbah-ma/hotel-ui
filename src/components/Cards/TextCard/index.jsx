import PropTypes from 'prop-types'
import { ImageCard } from '@/components/Cards'
//components
import { Text, ImageWrapper } from './TextCard.styles'
import Label from '@/components/Label'
import LinkComponent from '../../LinkComponent'

function TextCard({ src, variant, text, link, href, gradient = true, color }) {
  return (
    <LinkComponent href={href} {...link}>
      <ImageWrapper gradient={gradient} color={color}>
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
  href: PropTypes.string,
  link: PropTypes.shape({
    defaultLanguage: PropTypes.string,
    languages: PropTypes.array,
  }),
}

export default TextCard

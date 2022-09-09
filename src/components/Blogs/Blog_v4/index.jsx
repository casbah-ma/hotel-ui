import PropTypes from 'prop-types'
//components
import { ImageCard } from '@/components/Cards'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import Button from '@/components/Button'
//styles
import {
  Container,
  Content,
  Image,
  imagePositions,
  SmallImage,
} from './Blog_v4.styles'

function Blog_v4({ title, text, children, bgColor, color }) {
  return (
    <Container color={color} bgColor={bgColor} data-testid="blogv4-container">
      <Title {...title} color={color} />
      <Content>
        <Paragraph fontSize="md" description={text} />
        {children}
      </Content>
    </Container>
  )
}

Blog_v4.propTypes = {
  title: PropTypes.shape(Title.propTypes).isRequired,
  text: PropTypes.string.isRequired,
}

export default Blog_v4

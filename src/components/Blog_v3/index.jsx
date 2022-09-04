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
} from './Blog_v3.styles'

function Blog_v3({
  title,
  text,
  contentIsCentred = false,
  images,
  imagePosition,
  actionProps = null,
}) {
  return (
    <Container imagePosition={imagePosition} data-testid="blogv3-container">
      <Content contentIsCentred={contentIsCentred}>
        <Title {...title} />
        <Paragraph fontSize="rg" description={text} />
        {actionProps && <Button {...actionProps} />}
      </Content>
      <Image imagePosition={imagePosition}>
        <ImageCard {...images[0]} />
        <SmallImage imagePosition={imagePosition}>
          <ImageCard {...images[1]} />
        </SmallImage>
      </Image>
    </Container>
  )
}

Blog_v3.propTypes = {
  title: PropTypes.shape(Title.propTypes).isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape(ImageCard.propTypes)).isRequired,
  contentIsCentred: PropTypes.bool,
  imagePosition: PropTypes.oneOf(Object.keys(imagePositions)),
  actionProps: PropTypes.shape(Button.propTypes),
}

export default Blog_v3

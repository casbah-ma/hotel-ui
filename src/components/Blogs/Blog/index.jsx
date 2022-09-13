import PropTypes from 'prop-types'
//components
import { ImageCard } from '@/components/Cards'
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import Button from '@/components/Button'
//styles
import {
  Article,
  Container,
  Content,
  Grid,
  Image,
  imagePositions,
  Text,
} from './Blog.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function Blog({
  title,
  articles,
  contentIsCentred = false,
  image = null,
  imagePosition,
  actionProps = null,
  rows,
}) {
  const columns = articles.length
  return (
    <Container imagePosition={imagePosition} data-testid="blog-container">
      <Content contentIsCentred={contentIsCentred}>
        <Title {...title} />
        <Text>
          <Grid rows={rows}>
            {!isEmpty(articles) &&
              articles.map((article, index) => (
                <Article key={index} columns={columns} rows={rows}>
                  <Paragraph
                    fontSize={
                      columns > 2 && rows !== 1 && index === 0 ? 'md' : 'sm'
                    }
                    description={article}
                  />
                </Article>
              ))}
          </Grid>
          {actionProps && <Button {...actionProps} />}
        </Text>
      </Content>
      <Image imagePosition={imagePosition}>
        {image && <ImageCard {...image} />}
      </Image>
    </Container>
  )
}

Blog.propTypes = {
  title: PropTypes.shape(Title.propTypes).isRequired,
  articles: PropTypes.arrayOf(PropTypes.string).isRequired,
  contentIsCentred: PropTypes.bool,
  imagePosition: PropTypes.oneOf(Object.keys(imagePositions)),
  image: PropTypes.shape(ImageCard.propTypes),
  actionProps: PropTypes.shape(Button.propTypes),
}

export default Blog

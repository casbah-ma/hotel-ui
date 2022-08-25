import PropTypes from 'prop-types'
import { isEmpty } from '@/helpers/utils'
import {
  MasonryContainer,
  MasonryItem,
  StyledImage,
  Wrapper,
  imgSizes,
  imgSizesNext,
} from './Masonry.styles'
import CategoriesBar from '@/components/CategoriesBar'
import Image from 'next/image'

function Masonry({ images, barProps }) {
  return (
    <Wrapper>
      <CategoriesBar {...barProps} />
      <MasonryContainer>
        {!isEmpty(images) &&
          images.map((image, index) => (
            <MasonryItem key={index} size={image.size}>
              <StyledImage>
                <Image
                  className="radius-lg"
                  role="img"
                  src={image.imgUrl}
                  alt={image.alt}
                  width="640"
                  height={imgSizesNext[image.size]}
                  objectFit="cover"
                />
              </StyledImage>
            </MasonryItem>
          ))}
      </MasonryContainer>
    </Wrapper>
  )
}

Masonry.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      size: PropTypes.oneOf(Object.keys(imgSizes)),
      link: PropTypes.string,
    })
  ),
  barProps: CategoriesBar.propTypes,
}

export default Masonry

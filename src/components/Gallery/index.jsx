import PropTypes from 'prop-types'
import {
  gridVariants,
  StyledContainer,
  StyledGrid,
  StyledImage,
} from './Gallery.styles'
import Header from '@/components/Header'
import { isEmpty } from '@/helpers/utils'

const Gallery = function ({ headerProps, images, variant }) {
  return (
    <StyledContainer>
      {!isEmpty(headerProps) && <Header {...headerProps} />}
      <StyledGrid variant={variant}>
        {!isEmpty(images) &&
          images.map((item, index) => {
            return (
              <StyledImage
                imgSize={item.size}
                role="img"
                src={item.imgUrl}
                alt={item.alt}
                key={index}
              />
            )
          })}
      </StyledGrid>
    </StyledContainer>
  )
}

Gallery.defaultProps = {
  varaint: 'threeColumns',
}

Gallery.propTypes = {
  varaint: PropTypes.oneOf(Object.keys(gridVariants)),
  headerProps: PropTypes.shape(Header.propTypes),
  images: PropTypes.array,
}

export default Gallery

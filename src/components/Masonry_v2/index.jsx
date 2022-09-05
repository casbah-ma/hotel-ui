import { isEmpty } from '@/helpers/utils'
import Image from 'next/image'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import {
  imgSizesNext,
  MasonryWrapper,
  MasonryContainer,
  MasonryItem,
  MasonryHeader,
} from './Masonry.styles'

function Masonry_v2({ images, headerProps, barProps }) {
  return (
    <MasonryWrapper>
      <MasonryHeader>
        {!isEmpty(headerProps) && <Header {...headerProps} />}
      </MasonryHeader>
      <MasonryContainer>
        {!isEmpty(images) &&
          images.map((image, index) => (
            <MasonryItem key={index} size={image.size}>
              <Image
                className="radius-lg"
                role="img"
                src={image.imgUrl}
                alt={image.alt}
                width={imgSizesNext[image.size].width}
                height={imgSizesNext[image.size].height}
                objectFit="cover"
              />
            </MasonryItem>
          ))}
      </MasonryContainer>
    </MasonryWrapper>
  )
}

Masonry_v2.propTypes = {}

export default Masonry_v2

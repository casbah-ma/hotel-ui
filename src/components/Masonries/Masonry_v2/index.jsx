import { isEmpty } from '@/helpers/utils'
import Image from 'next/image'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import FilterBar from '@/components/FilterBar'
import {
  imgSizesNext,
  MasonryWrapper,
  MasonryContainer,
  MasonryItem,
  MasonryHeader,
} from './Masonry.styles'
import { useState } from 'react'

function Masonry_v2({ images, headerProps }) {
  //handle active image
  const [active, setActive] = useState('All')
  const handleActive = (image) => {
    setActive(image)
  }
  //function to get all types and how many rooms they have
  const getTypes = (images) => {
    const types = []
    images.forEach((image) => {
      let index = types.findIndex((_image) => _image.type === image.type)
      if (index === -1) {
        //add the image if doesn't exist
        types.push({ type: image.type, quantity: 1 })
      } else {
        //increase the quantity if it does exist
        types[index].quantity = types[index].quantity + 1
      }
    })
    types.unshift({ type: 'All', quantity: images.length })
    return types
  }

  //filter
  const filteredImages = images.filter((image) =>
    active === 'All' ? true : image.type === active
  )

  return (
    <MasonryWrapper data-testid="masonry_v2">
      <MasonryHeader>
        {!isEmpty(headerProps) && <Header {...headerProps} />}
        <FilterBar
          active={active}
          handleActive={handleActive}
          variant="v2"
          categories={getTypes(images)}
        />
      </MasonryHeader>
      <MasonryContainer>
        {!isEmpty(filteredImages) &&
          filteredImages.map((image, index) => (
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

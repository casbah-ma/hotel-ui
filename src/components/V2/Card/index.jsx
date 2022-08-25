import React from 'react'
import PropTypes from 'prop-types'
import {
  CardContainer,
  CardImageContainer,
  CardInfosContainer,
} from './Card.styles'
import Image from 'next/image'
import Paragraph from '@/components/Paragraph'
import Label from '@/components/Label'

function Card_v2({ size, image, date, description, link }) {
  return (
    <CardContainer size={size}>
      <CardImageContainer>
        <Image
          className="rounded-xl"
          src={image}
          width={size === 'small' ? 340 : 593}
          height={380}
          objectFit="cover"
        />
      </CardImageContainer>
      <CardInfosContainer>
        <Paragraph description={description} fontSize="rg" />
        <Label labelText={date} />
      </CardInfosContainer>
    </CardContainer>
  )
}

Card_v2.propTypes = {}

export default Card_v2

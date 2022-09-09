import { StyledCard, CardImage, CardAction, CardLink } from './Card.styles'
import ArrowRight from '@/components/Icons/ArrowRight'
import { isEmpty } from '@/helpers/utils'
import Header from '@/components/Header'
import Link from 'next/link'
import Paragraph from '@/components/Paragraph'
import Image from 'next/image'

// Default Card component
export const DefaultCard = function ({ ImgUrl, direction, alt }) {
  return (
    <StyledCard direction={direction}>
      <CardImage direction={direction}>
        <Image
          className="radius-lg"
          src={ImgUrl}
          width={direction === 'vertical' ? 400 : 542}
          height={direction === 'vertical' ? 480 : 342}
          alt={alt}
          objectFit="cover"
        />
      </CardImage>
    </StyledCard>
  )
}

// Card With Header component
export const HeaderCard = function ({ header, ImgUrl, direction }) {
  const { title, description } = header
  return (
    <StyledCard direction={direction}>
      <CardImage direction={direction}>
        <Image
          className="radius-lg"
          src={ImgUrl}
          width={direction === 'vertical' ? 400 : 542}
          height={direction === 'vertical' ? 480 : 342}
          alt="card"
          objectFit="cover"
        />
      </CardImage>
      <CardAction direction={direction}>
        {!isEmpty(header) && <Header title={title} description={description} />}
      </CardAction>
    </StyledCard>
  )
}

//  Card With Link and Description
export const LinkCard = function ({ linkCard, ImgUrl, direction }) {
  const { description, link } = linkCard
  return (
    <Link href={link}>
      <StyledCard data-testid="category-card" direction={direction}>
        <CardImage direction={direction}>
          <Image
            className="radius-lg"
            src={ImgUrl}
            width={direction === 'vertical' ? 400 : 542}
            height={direction === 'vertical' ? 480 : 342}
            alt="card"
            objectFit="cover"
          />
        </CardImage>
        {!isEmpty(linkCard) && (
          <CardAction direction={direction}>
            <Paragraph description={description} />
            <CardLink direction={direction}>
              <ArrowRight width={49} height={19} />
            </CardLink>
          </CardAction>
        )}
      </StyledCard>
    </Link>
  )
}

export const getCard = (props) => {
  const { variant, header, linkCard, ImgUrl, direction } = props
  switch (variant) {
    case 'header':
      return (
        <HeaderCard
          data-testid="card"
          header={header}
          ImgUrl={ImgUrl}
          direction={direction}
        />
      )
    case 'link':
      return (
        <LinkCard linkCard={linkCard} ImgUrl={ImgUrl} direction={direction} />
      )
    default:
      return <DefaultCard ImgUrl={ImgUrl} direction={direction} />
  }
}

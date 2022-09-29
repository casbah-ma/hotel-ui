import PropTypes from 'prop-types'
//components
import Button from '@/components/Button'
import Title from '@/components/Title'
import { ImageCard } from '@/components/Cards'
//styles
import {
  Container,
  ImageContainer,
  InfoHeader,
  StyledChildren,
  Subtitle,
} from './RoomCard_v3.styles'
import LinkComponent from '../../LinkComponent'

function RoomCard_v3({
  children,
  imageSrc,
  name,
  subtitle,
  actionProps,
  href,
  link,
  showItems,
}) {
  return (
    <LinkComponent href={href} {...link}>
      <Container imageSrc={imageSrc}>
        {imageSrc && (
          <ImageContainer>
            <ImageCard src={imageSrc} variant="medium" />
          </ImageContainer>
        )}
        <InfoHeader>
          <Title color={imageSrc ? 'white' : 'black'} level="3" title={name} />
          <Subtitle>{subtitle}</Subtitle>
        </InfoHeader>
        {showItems && <StyledChildren>{children}</StyledChildren>}
        {actionProps && <Button {...actionProps} />}
      </Container>
    </LinkComponent>
  )
}

RoomCard_v3.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  actionProps: PropTypes.shape({ ...Button.propTypes }),
  showItems: PropTypes.bool,
  href: PropTypes.string,
  link: PropTypes.shape({
    defaultLanguage: PropTypes.string,
    languages: PropTypes.array,
  }),
}

export default RoomCard_v3

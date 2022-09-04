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

function RoomCard_v3({
  children,
  imageSrc,
  name,
  subtitle,
  actionProps,
  bgColor,
}) {
  return (
    <Container bgColor={bgColor} imageSrc={imageSrc}>
      {imageSrc && (
        <ImageContainer>
          <ImageCard src={imageSrc} variant="medium" />
        </ImageContainer>
      )}
      <InfoHeader>
        <Title color={imageSrc ? 'white' : 'black'} level="3" title={name} />
        <Subtitle>{subtitle}</Subtitle>
      </InfoHeader>
      <StyledChildren>{children}</StyledChildren>
      {actionProps && <Button {...actionProps} />}
    </Container>
  )
}

RoomCard_v3.propTypes = {
  headerProps: PropTypes.shape({ ...InfoHeader.propTypes }),
  actionProps: PropTypes.shape({ ...Button.propTypes }),
  bgColor: PropTypes.string,
}

export default RoomCard_v3

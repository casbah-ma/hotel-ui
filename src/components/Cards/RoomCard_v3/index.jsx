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

function RoomCard_v3({ children, imageSrc, name, subtitle, actionProps }) {
  return (
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
      <StyledChildren>{children}</StyledChildren>
      {actionProps && <Button {...actionProps} />}
    </Container>
  )
}

RoomCard_v3.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  actionProps: PropTypes.shape({ ...Button.propTypes }),
}

export default RoomCard_v3

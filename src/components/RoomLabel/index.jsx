import PropTypes from 'prop-types'
import { Container, Name, Number } from './RoomLabel.styles'

const RoomLabel = function ({
  roomNumber,
  roomName,
  color,
  bgColor,
  borderColor,
}) {
  return (
    <Container
      data-testid="room-label-container"
      bgColor={bgColor}
      borderColor={borderColor}
      color={color}
    >
      <Number>{roomNumber}</Number>
      <Name>{roomName}</Name>
    </Container>
  )
}

RoomLabel.propTypes = {
  roomNumber: PropTypes.string,
  roomName: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
}

export default RoomLabel

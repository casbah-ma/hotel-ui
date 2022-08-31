import PropTypes from 'prop-types'
//styles
import { Container } from './InfoItem.styles'
//compontents
import Paragraph from '@/components//Paragraph'
import Label from '@/components//Label'

function InfoItem({ infoName, infoValue, space = true }) {
  return (
    <Container data-testid="information-room-items" space={space}>
      <Paragraph description={infoName} />
      <Label labelText={infoValue} fontSize="sm" />
    </Container>
  )
}

InfoItem.propTypes = {
  infoName: PropTypes.string.isRequired,
  infoValue: PropTypes.string.isRequired,
}

export default InfoItem

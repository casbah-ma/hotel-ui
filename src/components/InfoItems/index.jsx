import PropTypes from 'prop-types'
import { isEmpty } from '@/helpers/utils'
//components
import InfoItem from './InfoItem'
//styles
import { Container } from './InfoItems.styles'

function InfoItems({ infos }) {
  console.log(infos)
  return (
    <Container>
      {!isEmpty(infos) &&
        infos.map((info) => (
          <InfoItem
            key={info.id}
            infoName={info.infoName}
            infoValue={info.infoValue}
          />
        ))}
    </Container>
  )
}

InfoItems.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({ ...InfoItem.propTypes, id: PropTypes.string })
  ),
}

export default InfoItems

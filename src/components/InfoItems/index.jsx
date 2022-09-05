import PropTypes from 'prop-types'
import { isEmpty } from '@/helpers/utils'
//components
import InfoItem from './InfoItem'
//styles
import { Container } from './InfoItems.styles'

function InfoItems({ infos, space }) {
  console.log(infos)
  return (
    <Container>
      {!isEmpty(infos) &&
        infos.map((info) => (
          <InfoItem
            key={info.infoName}
            infoName={info.infoName}
            infoValue={info.infoValue}
            space={space}
          />
        ))}
    </Container>
  )
}

InfoItems.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({ ...InfoItem.propTypes, id: PropTypes.string })
  ),
  space: PropTypes.bool,
}

export default InfoItems

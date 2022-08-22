import PropTypes from 'prop-types'
//components
import Title from '@/components/Title'
import Label from '@/components/Label'
import ImageCard from '@/components/Cards/ImageCard'
//styles
import { HeaderContainer, TextWrapper } from './InfoHeader.styles'

const InfoHeader = function ({ title, subtitle, roomImage }) {
  return (
    <HeaderContainer>
      <TextWrapper>
        <Title title={title} level="3" />
        <Label labelText={subtitle} fontSize="md" />
      </TextWrapper>
      {roomImage && <ImageCard {...roomImage} />}
    </HeaderContainer>
  )
}

InfoHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  roomImage: PropTypes.shape(ImageCard.propTypes),
}

export default InfoHeader

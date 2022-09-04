import PropTypes from 'prop-types'
//components
import Title from '@/components/Title'
import Label from '@/components/Label'
import ImageCard from '@/components/Cards/ImageCard'
//styles
import { HeaderContainer, TextWrapper } from './InfoHeader.styles'

function InfoHeader({ title, subtitle, roomImage, variant = 'v1' }) {
  return (
    <HeaderContainer variant={variant}>
      <TextWrapper variant={variant}>
        <Title title={title} level="3" />
        <Label
          labelText={variant === 'v1' ? subtitle : `(${subtitle})`}
          fontSize="md"
          color="#787777"
        />
      </TextWrapper>
      {roomImage && <ImageCard {...roomImage} />}
    </HeaderContainer>
  )
}

InfoHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  roomImage: PropTypes.shape(ImageCard.propTypes),
  variant: PropTypes.string,
}

export default InfoHeader

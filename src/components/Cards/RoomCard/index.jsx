import PropTypes from 'prop-types'
//components
import Button from '@/components/Button'
import InfoHeader from '@/components/InfoHeader'
import { Container, StyledChildren } from './RoomCard.styles'

function RoomCard({
  children,
  title,
  subtitle,
  image,
  actionProps,
  bgColor,
  variant,
}) {
  return (
    <Container bgColor={bgColor} variant={variant}>
      <InfoHeader
        variant={variant}
        roomImage={image}
        title={title}
        subtitle={subtitle}
      />
      <StyledChildren>{children}</StyledChildren>
      {actionProps && <Button {...actionProps} />}
    </Container>
  )
}

RoomCard.propTypes = {
  headerProps: PropTypes.shape({ ...InfoHeader.propTypes }),
  actionProps: PropTypes.shape({ ...Button.propTypes }),
  bgColor: PropTypes.string,
}

export default RoomCard

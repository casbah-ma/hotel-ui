import PropTypes from 'prop-types'
//components
import Button from '@/components/Button'
import InfoHeader from '@/components/InfoHeader'
//styles
import { Container, StyledChildren } from './RoomCard.styles'
import LinkComponent from '../../LinkComponent'

function RoomCard({
  children,
  title,
  subtitle,
  image,
  actionProps,
  bgColor,
  variant,
  href,
  link,
}) {
  return (
    <LinkComponent href={href} {...link}>
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
    </LinkComponent>
  )
}

RoomCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.shape({
    variant: PropTypes.string,
    src: PropTypes.string,
  }),
  actionProps: PropTypes.shape({ ...Button.propTypes }),
  bgColor: PropTypes.string,
  href: PropTypes.string,
  link: PropTypes.shape({
    defaultLanguage: PropTypes.string,
    languages: PropTypes.array,
  }),
}

export default RoomCard

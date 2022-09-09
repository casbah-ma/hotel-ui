import PropTypes from 'prop-types'
//components
import Button from '@/components/Button'
import InfoHeader from '@/components/InfoHeader'
import { Container, StyledChildren } from './RoomCard_v2.styles'
import Paragraph from '../../Paragraph'
import LinkComponent from '../../LinkComponent'

function RoomCard_v2({
  title,
  subtitle,
  actionProps,
  bgColor,
  text,
  link,
  href,
}) {
  return (
    <LinkComponent href={href} {...link}>
      <Container bgColor={bgColor}>
        <InfoHeader title={title} subtitle={subtitle} />
        <StyledChildren>
          <Paragraph fontSize="rg" description={text} />
        </StyledChildren>
        {actionProps && <Button {...actionProps} />}
      </Container>
    </LinkComponent>
  )
}

RoomCard_v2.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  actionProps: PropTypes.shape({ ...Button.propTypes }),
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  href: PropTypes.string,
  link: PropTypes.shape({
    defaultLanguage: PropTypes.string,
    languages: PropTypes.array,
  }),
}

export default RoomCard_v2

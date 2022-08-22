import { getCard } from './Cards'
import PropTypes from 'prop-types'
import Header from '@/components/Header'

const Card = function (props) {
  return getCard(props)
}

Card.propTypes = {
  ImgUrl: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  variant: PropTypes.string,
  header: PropTypes.shape(Header.propTypes),
  linkCard: PropTypes.shape({
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}

Card.defaultProps = {
  ImgUrl:
    'https://images.unsplash.com/photo-1570213489059-0aac6626cade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  direction: 'horizontal',
}

export default Card

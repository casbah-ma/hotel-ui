import PropTypes from 'prop-types'
import { Card_v2, Card } from '@/componenets/Cards'
import Header from '@/componenets/Header'
import { ExploreWrapper } from './Explore.styles'

function Explore({ variant, header, cards }) {
  return (
    <ExploreWrapper variant={variant} data-testid="explore">
      <Header {...header} />
      {cards?.map((card, index) =>
        !variant || variant === 'v1' ? (
          <Card key={index} {...card} />
        ) : (
          <Card_v2 key={index} {...card} />
        )
      )}
    </ExploreWrapper>
  )
}

Explore.propTypes = {
  variant: PropTypes.oneOf(['v1', 'v2']),
  header: PropTypes.object,
  cards: PropTypes.array,
}

export default Explore

import PropTypes from 'prop-types'
import { Grid } from './CategoriesGrid.styles'
import { isEmpty } from '@/helpers/utils'
import { Card } from '@/components/Cards'

function CategoriesGrid({ cards }) {
  return (
    <Grid>
      {!isEmpty(cards) && cards.map((card) => <Card key={card.id} {...card} />)}
    </Grid>
  )
}

CategoriesGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      ...Card.propTypes,
      id: PropTypes.string.isRequired,
    })
  ),
}

export default CategoriesGrid

import PropTypes from 'prop-types'
// components
import Header from '@/components/Header'
import CategoriesGrid from './CategoriesGrid'
//styles
import { Container } from './CategoriesCardsSection.styles'

function CategoriesCardsSection({ headerProps, cards }) {
  return (
    <Container>
      <Header {...headerProps} />
      <CategoriesGrid cards={cards} />
    </Container>
  )
}

CategoriesCardsSection.propTypes = {
  headerProps: PropTypes.shape({ ...Header.propTypes }),
  cards: PropTypes.shape(CategoriesGrid.propTypes.cards),
}

export default CategoriesCardsSection

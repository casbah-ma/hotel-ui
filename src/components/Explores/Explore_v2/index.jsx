import { ExploreCard, ExploreCards, ExploreContainer } from './Explore.styles'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import { TextCard } from '@/components/Cards'
import { isEmpty } from '@/helpers/utils'

function Explore_v2({ header, data }) {
  return (
    <ExploreContainer data-testid="explore_v2">
      {!isEmpty(header) && <Header {...header} />}
      <ExploreCards>
        {!isEmpty(data) &&
          data.map((card, index) => (
            <ExploreCard key={index}>
              <TextCard {...card} />
            </ExploreCard>
          ))}
      </ExploreCards>
    </ExploreContainer>
  )
}

Explore_v2.propTypes = {
  header: PropTypes.object,
  data: PropTypes.array,
}

export default Explore_v2

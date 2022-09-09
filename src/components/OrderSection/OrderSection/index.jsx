import {
    ExploreCard,
    ExploreCards,
    ExploreContainer,
    ExploreContent,
    ExploreHeader,
  } from './OrderSection.styles'
  import Header from '@/components/Header'
  import { Form_v4 } from '@/components/Forms'
  import { isEmpty } from '@/helpers/utils'
  
  function OrderSection({ header, data }) {
    return (
      <ExploreContainer data-testid="OrderSection">
        {!isEmpty(header) && <Header {...header} />}
              <ExploreCard>
                <Form_v4 {...data}/>
              </ExploreCard>
      </ExploreContainer>
    )
  }
  
  OrderSection.propTypes = {}
  
  export default OrderSection
  
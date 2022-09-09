import { OrderContainer, OrderTitle, OrderForm } from './Order.styles'
import PropTypes from 'prop-types'
import Title from '../Title'
import OrderFrom_v2 from '../Forms/OrderForm_v2'

function Order({ title, formProps }) {
  return (
    <OrderContainer>
      <OrderTitle>
        <Title level="3" title={title} />
      </OrderTitle>

      <OrderFrom_v2 {...formProps} />
    </OrderContainer>
  )
}

Order.propTypes = {}

export default Order

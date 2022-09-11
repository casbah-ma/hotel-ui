import Order from '.'
import * as OrderFrom_v2 from '@/components/Forms/OrderForm_v2/OrderForm.stories'

export default {
  title: 'Sections/Order',
  component: Order,
}

const Template = (args) => <Order {...args} />
export const Default = Template.bind({})
Default.args = {
  title: 'Place your order and get your gift card in seconds',
  formProps: OrderFrom_v2.Default.args,
}

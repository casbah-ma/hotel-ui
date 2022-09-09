import OrderSection from '.'

export default {
  title: 'Sections/OrderSection/OrderSection_v1',
  component: OrderSection,
}

const Template = (args) => <OrderSection {...args} />

export const Default = Template.bind({})
Default.args = {
  header: {
    title: 'Sleep Peacefully',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    derction: 'vertical',
  },
  data:{
    formInputs:{
        amount: 10000,
         amountError: '',
         quantity: 1,
         total: 0,
         buttonLabel: 'Buy the gift card',
         currency: 'MAD',
         totalText: 'Total Value:',        
    }

  }
}

import Form_v4 from '.'
import useState from 'storybook-addon-state'
import * as Button from '@/components/Button/Button.stories'

export default {
  title: 'Forms/Form_v4',
  component: Form_v4,
  decorators: [
    (story) => {
      const [formInputs, setFormInputs] = useState('click', {
        amount: 10000,
        amountError: '',
        quantity: 1,
        total: 0,
        buttonLabel: 'Buy the gift card',
        currency: 'MAD',
        totalText: 'Total Value:',
      })
      const onChange = () => {}
      const onClick = () => {}
      const handleQuantityChange = (type, value) => {
        setFormInputs({ ...formInputs, [type]: value })
      }
      return (
        <Form_v4
          formInputs={formInputs}
          onquantityChange={handleQuantityChange}
          // buttonProps={{
          //   ...Button.Primary.args,
          // }}
          onChange={onChange}
          onClick={onClick}
        />
      )
    },
  ],
}

const Template = (args) => <Form_v4 {...args} />
export const Default = Template.bind({})
Default.args = {
  formInputs: {
    amount: 10000,
    amountError: '',
    quantity: 0,
    total: null,
    buttonLabel: 'Buy the gift card',
    currency: 'MAD',
    totalText: 'Total Value:',
  },
  onChange: () => {},
  onClick: () => {},
}

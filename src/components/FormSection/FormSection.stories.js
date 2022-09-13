import FormSection from '.'
import * as From_v3 from '@/components/Forms/Form_v3/Form.stories'

export default {
  title: 'Sections/FormSection',
  component: FormSection,
}

const Template = (args) => <FormSection {...args} />
export const Default = Template.bind({})
Default.args = {
  title: 'We are listening with all ears',
  formProps: From_v3.Default.args,
}

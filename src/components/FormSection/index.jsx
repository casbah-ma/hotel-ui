import { FormContainer, FormTitle } from './FormSection.styles'
import PropTypes from 'prop-types'
import Title from '../Title'
import From_v3 from '../Forms/Form_v3'

function FormSection({ title, formProps }) {
  return (
    <FormContainer>
      <FormTitle>
        <Title level="3" title={title} />
      </FormTitle>
      <From_v3 {...formProps} />
    </FormContainer>
  )
}

FormSection.propTypes = {}

export default FormSection

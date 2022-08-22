import { HeroII } from '@/components/Heros'
import Layout from '@/components/Layout'
import { ContactUs } from '@/components/Forms'
import Map from '@/components/Map'
import Contacts from '@/components/Contacts'
import { useState } from 'react'
import { isEmail } from '@/helpers/utils'
const ContactUsPage = function ({
  layoutProps,
  heroProps,
  ContactsProps,
  MapProps,
}) {
  const [formInputs, setFormInputs] = useState({
    fullName: '',
    fullNameError: '',
    email: '',
    emailError: '',
    message: '',
    messageError: '',
  })

  const hnadleFormChange = (e) => {
    const { name, value } = e.target
    setFormInputs({ ...formInputs, [name]: value })
  }

  return (
    <Layout {...layoutProps}>
      <HeroII {...heroProps}>
        <ContactUs formInputs={formInputs} onChange={hnadleFormChange} />
      </HeroII>
      <Contacts {...ContactsProps} />
      <Map {...MapProps} />
    </Layout>
  )
}
export default ContactUsPage

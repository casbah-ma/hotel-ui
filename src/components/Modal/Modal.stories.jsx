import Modal from '.'

export default {
  title: 'Components/Modal',
  component: Modal,
}

const Template = (args) => (
  <Modal {...args}>
    <div className="h-full flex flex-col justify-between items-center">
      <p className="text-white">
        Your payment has been successfully submitted. We’ve sent you an email
        with all of the details of your order.
      </p>
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Got it, thanks!
      </button>
    </div>
  </Modal>
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  closeModal: () => {},
}

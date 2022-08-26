import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CloseButton } from './Modal.styles'

function Modal({ children, isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        data-testid="modal-container"
        as="div"
        className="dialog"
        onClose={closeModal}
      >
        <Transition.Child
          data-testid="modal-child"
          as={Fragment}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <CloseButton onClick={closeModal}>
            <XMarkIcon />
          </CloseButton>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition duration-[700ms]"
          enterFrom="opacity-0 -translate-x-80"
          enterTo="opacity-100 translate-x-0"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-80"
        >
          <Dialog.Panel className="dialog-panel">{children}</Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default Modal

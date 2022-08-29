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
          enter="button-enter"
          enterFrom="button-enter-from"
          enterTo="button-enter-to"
          leave="button-leave"
          leaveFrom="button-leave-from"
          leaveTo="button-leave-to"
        >
          <CloseButton onClick={closeModal}>
            <XMarkIcon />
          </CloseButton>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="enter"
          enterFrom="enter-from"
          enterTo="enter-to"
          leave="leave"
          leaveFrom="leave-from"
          leaveTo="leave-to"
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

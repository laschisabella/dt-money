import { Container } from './styles';
import Modal from 'react-modal'

interface NewTransactionsProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root') // for accessible pourposes

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionsProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
        <h2>Create new transaction</h2>

        <input
          placeholder='Title'
        />

        <input
          placeholder='Value'
          type='number'
        />

        <input
          placeholder='Category'
        />

        <button
          type="submit"
        >
          Create transaction
        </button>



      </Container>
    </Modal>
  )
}
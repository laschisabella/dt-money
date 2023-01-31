import { Container, TransactionTypeContainer } from './styles';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

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
        <button
          type="button"
          onClick={onRequestClose}
          className="closeModal"
        >
          <img src={closeImg} alt="close modal" />
        </button>
        <h2>Create new transaction</h2>

        <input
          placeholder='Title'
        />

        <input
          placeholder='Value'
          type='number'
        />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Income Transaction icon" />
            <span>Earnings</span>
          </button>
          <button
            type="button"
          >
            <img src={outcomeImg} alt="Outcome Transaction icon" />
            <span>Expenses</span>
          </button>
        </TransactionTypeContainer>

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
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import withdrawImg from '../../assets/withdraw.svg'
import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { useTransactions } from '../../hooks/useTransactions';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionsProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root') // for accessible pourposes (React Modal)

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionsProps) {

  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    // close modal and reset form
    onRequestClose()
    setTitle('')
    setCategory('')
    setType('deposit')
    setAmount(0)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container onSubmit={handleCreateNewTransaction}>
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
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          placeholder='Value'
          type='number'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Income Transaction icon" />
            <span>Earnings</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="#e52e4d"
          >
            <img src={withdrawImg} alt="Outcome Transaction icon" />
            <span>Expenses</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Category'
          value={category}
          onChange={event => setCategory(event.target.value)}
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
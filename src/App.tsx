import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { createServer } from 'miragejs'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          createdAt: 'some date'
        }
      ]
    })
  }
})

export function App() {

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true)
  }
  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false)
  }

  return (
    <>
      <Header
        OnOpenNewTransactionModal={handleOpenTransactionModal}
      />
      <NewTransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
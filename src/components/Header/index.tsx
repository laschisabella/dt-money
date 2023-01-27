import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true)
  }
  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false)
  }


  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <button onClick={handleOpenTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  )
}
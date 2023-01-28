import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  OnOpenNewTransactionModal: () => void
}

export function Header({ OnOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <button onClick={OnOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  )
}
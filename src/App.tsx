import { Dashboard } from './components/Dashborad'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { createServer } from 'miragejs'

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
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
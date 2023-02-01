import { Container } from './styles';

import incomeImg from '../../assets/income.svg'
import withdrawImg from '../../assets/withdraw.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {

  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>

      {/* <TransactionsContext.Consumer>
        {
          (data) => {
            return (
              <div>
                Another way to use data from context
              </div>
            )
          }
        }
      </TransactionsContext.Consumer> */}

      <div>
        <header>
          <p>Earnings</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('en', { // pt-BR
              style: 'currency',
              currency: 'USD', // BRL
            }).format(summary.deposits)
          }
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={withdrawImg} alt="" />
        </header>
        <strong>
          -
          {
            new Intl.NumberFormat('en', { // pt-BR
              style: 'currency',
              currency: 'USD', // BRL
            }).format(summary.withdraws)
          }
        </strong>
      </div>
      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('en', { // pt-BR
              style: 'currency',
              currency: 'USD', // BRL
            }).format(summary.total)
          }
        </strong>
      </div>
    </Container>
  )
}
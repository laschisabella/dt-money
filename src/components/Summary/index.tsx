import { Container } from './styles';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>$ 1000.00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong> - $ 500.00</strong>
      </div>
      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>$ 500.00</strong>
      </div>
    </Container>
  )
}
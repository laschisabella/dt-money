import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>$ 4.000</td>
            <td>desenvolvimento</td>
            <td>25/02/23</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>$ 1.000</td>
            <td>despesas fixas</td>
            <td>25/02/23</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
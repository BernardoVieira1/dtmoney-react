import { Container } from "./style";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site web</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Conta de água</td>
            <td className="withdraw">- R$ 200,00</td>
            <td>conta</td>
            <td>25/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
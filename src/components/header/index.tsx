import logoimg from '../../assets/Logo.svg';
import { Container, Content } from './style';


export function Header(){
  return(
    <Container>
      <Content>
        <img src={logoimg} alt="Logo dtmoney" />
        <button>Nova transação</button>
      </Content>
    </Container>
  )
}
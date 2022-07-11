import EntradasImg from "../../assets/Entradas.svg"
import SaidasImg from "../../assets/Saidas.svg";
import TotalImg from "../../assets/Total.svg";

import { Container } from "./style";
export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={EntradasImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={SaidasImg} alt="Saidas" />
        </header>
        <strong>- R$100,00</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$900,00</strong>
      </div>


    </Container>
  );
};
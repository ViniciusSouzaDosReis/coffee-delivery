import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

import illustration from "../../assets/Illustration.png";
import {
  CongratulationText,
  OrderInformationAndIlustration,
  OrderInformationBorder,
  OrderInformationContainer,
  OrderInformationLine,
} from "./style";

function Success() {
  return (
    <>
      <CongratulationText>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </CongratulationText>
      <OrderInformationAndIlustration>
        <OrderInformationBorder>
          <OrderInformationContainer>
            <OrderInformationLine $color="purple">
              <div>
                <MapPin size={16} color="white" weight="fill" />
              </div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </OrderInformationLine>
            <OrderInformationLine $color="yellow">
              <div>
                <Clock size={16} color="white" weight="fill" />
              </div>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </OrderInformationLine>
            <OrderInformationLine $color="yellow-dark">
              <div>
                <CurrencyDollar size={16} color="white" />
              </div>
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            </OrderInformationLine>
          </OrderInformationContainer>
        </OrderInformationBorder>
        <div>
          <img src={illustration} alt="" />
        </div>
      </OrderInformationAndIlustration>
    </>
  );
}

export { Success };

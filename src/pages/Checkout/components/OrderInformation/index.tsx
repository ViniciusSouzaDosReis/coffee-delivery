import { Minus, Plus, Trash } from "phosphor-react";
import { Counter } from "../../../Home/components/CoffeeList/components/CoffeeCard/styles";
import { Title } from "../../styles";
import {
  OrderInformationContainer,
  OrderInformationContent,
  CoffeeCard,
  CoffeeInfo,
  CoffeeImage,
  CoffeeDetails,
  Actions,
  PaymentInformationContainer,
} from "./style";

import coffeeImage from "../../../../assets/Coffee1.png";

function OrderInformation() {
  return (
    <OrderInformationContainer>
      <Title>Cafés selecionados</Title>
      <OrderInformationContent>
        <CoffeeCard>
          <CoffeeInfo>
            <CoffeeImage>
              <img src={coffeeImage} alt="Imagem de um café" />
            </CoffeeImage>
            <CoffeeDetails>
              <span>Expresso Tradicional</span>
              <Actions>
                <Counter>
                  <button>
                    <Minus color="#8047F8" weight="bold" size={14} />
                  </button>
                  0
                  <button>
                    <Plus color="#8047F8" weight="bold" size={14} />
                  </button>
                </Counter>
                <button>
                  <Trash color="#8047F8" size={16} />
                  Remover
                </button>
              </Actions>
            </CoffeeDetails>
          </CoffeeInfo>
          <strong>R$ 9,90</strong>
        </CoffeeCard>
        <hr />
        <PaymentInformationContainer>
          <div>
            <div>Total de itens</div>
            <div>R$ 29,70</div>
          </div>
          <div>
            <div>Entrega</div>
            <div>R$ 3,50</div>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
        </PaymentInformationContainer>
        <button>confirmar pedido</button>
      </OrderInformationContent>
    </OrderInformationContainer>
  );
}

export { OrderInformation };

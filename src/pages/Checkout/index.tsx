import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

import coffeeImage from "../../assets/Coffee1.png";
import { Counter } from "../Home/components/CoffeeList/components/CoffeeCard/styles";
import {
  Actions,
  CardsContainer,
  CheckoutContainer,
  CoffeeCard,
  CoffeeDetails,
  CoffeeImage,
  CoffeeInfo,
  FormLocation,
  InformationContainerWithIcon,
  LineInForm,
  LocationInfoContainer,
  OrderInformationContainer,
  OrderInformationContent,
  PaymentCard,
  PaymentCardContainer,
  PaymentInformationContainer,
  PaymentMethodContainer,
  Title,
  UserInformationContainer,
} from "./styles";
import { Input } from "../../components/Input";

function Checkout() {
  return (
    <CheckoutContainer>
      <UserInformationContainer>
        <Title>Complete seu pedido</Title>
        <CardsContainer>
          <LocationInfoContainer>
            <InformationContainerWithIcon>
              <MapPin size={24} color="#C47F17" />
              <div>
                <span>Endereço de entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </InformationContainerWithIcon>
            <FormLocation action="">
              <Input
                type="text"
                placeholder="CEP"
                style={{ width: "12.5rem" }}
                required
              />
              <Input type="text" placeholder="Rua" required />
              <LineInForm>
                <Input
                  type="text"
                  placeholder="Número"
                  style={{ maxWidth: "35rem" }}
                  required
                />
                <Input type="text" placeholder="Complemento" />
              </LineInForm>
              <LineInForm>
                <Input type="text" placeholder="Bairro" required />
                <Input type="text" placeholder="Cidade" required />
                <Input type="text" placeholder="UF" required />
              </LineInForm>
            </FormLocation>
          </LocationInfoContainer>
          <PaymentMethodContainer>
            <InformationContainerWithIcon>
              <CurrencyDollar size={24} color="#8047F8" />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </InformationContainerWithIcon>
            <PaymentCardContainer>
              <PaymentCard htmlFor="credit-input">
                <input id="credit-input" type="radio" name="form_of_payment" />
                <div>
                  <CreditCard size={16} color="#8047F8" />
                  <span>Cartão de crédito</span>
                </div>
              </PaymentCard>
              <PaymentCard htmlFor="debit-input">
                <input id="debit-input" type="radio" name="form_of_payment" />
                <div>
                  <Bank size={16} color="#8047F8" />
                  <span>cartão de débito</span>
                </div>
              </PaymentCard>
              <PaymentCard htmlFor="money-input">
                <input id="money-input" type="radio" name="form_of_payment" />
                <div>
                  <Money size={16} color="#8047F8" />
                  <span>dinheiro</span>
                </div>
              </PaymentCard>
            </PaymentCardContainer>
          </PaymentMethodContainer>
        </CardsContainer>
      </UserInformationContainer>
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
    </CheckoutContainer>
  );
}

export { Checkout };

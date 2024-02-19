import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { Input } from "../../../../components/Input";
import {
  CardsContainer,
  FormLocation,
  InformationContainerWithIcon,
  LineInForm,
  LocationInfoContainer,
  PaymentCard,
  PaymentCardContainer,
  PaymentMethodContainer,
  UserInformationContainer,
} from "./style";
import { Title } from "../../styles";

function UserInformation() {
  return (
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
  );
}

export { UserInformation };

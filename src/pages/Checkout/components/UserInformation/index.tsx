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
import { useFormContext } from "react-hook-form";
import { ChangeEvent } from "react";
// import { OrderPaymentFormData } from "../..";

function UserInformation() {
  //TODO: REFATORAR ISSO PARA UM COMPONENTE DE FORMULARIO

  const { register, setValue, watch } = useFormContext();

  const cep = watch("cep");
  const uf = watch("uf");
  const number = watch("number");

  function handleCepChange(event: ChangeEvent<HTMLInputElement>) {
    let cepValue = event.target.value;
    if (
      (isNaN(Number(cepValue)) && cepValue[5] !== "-") ||
      cepValue.length > 9
    ) {
      return;
    }
    if (cepValue.length === 5 && cepValue[4] !== "-") {
      cepValue = `${cepValue}-`;
    }
    setValue("cep", cepValue);
  }

  function handleUfChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value.length > 2) return;
    setValue("uf", value);
  }

  function handleNumberChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (isNaN(Number(value))) return;
    setValue("number", value);
  }

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
          <FormLocation>
            <Input
              type="text"
              placeholder="CEP"
              style={{ width: "12.5rem" }}
              required
              value={cep}
              {...register("cep")}
              onChange={handleCepChange}
            />
            <Input
              type="text"
              placeholder="Rua"
              required
              {...register("street")}
            />
            <LineInForm>
              <Input
                type="text"
                placeholder="Número"
                style={{ maxWidth: "35rem" }}
                required
                {...register("number")}
                value={number}
                onChange={handleNumberChange}
              />
              <Input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
            </LineInForm>
            <LineInForm>
              <Input
                type="text"
                placeholder="Bairro"
                required
                {...register("neighborhood")}
              />
              <Input
                type="text"
                placeholder="Cidade"
                required
                {...register("city")}
              />
              <Input
                type="text"
                placeholder="UF"
                required
                value={uf}
                {...register("uf")}
                onChange={handleUfChange}
              />
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
              <input
                id="credit-input"
                type="radio"
                value="credit"
                {...register("paymentMethod")}
              />
              <div>
                <CreditCard size={16} color="#8047F8" />
                <span>Cartão de crédito</span>
              </div>
            </PaymentCard>
            <PaymentCard htmlFor="debit-input">
              <input
                id="debit-input"
                type="radio"
                value="debit"
                {...register("paymentMethod")}
              />
              <div>
                <Bank size={16} color="#8047F8" />
                <span>cartão de débito</span>
              </div>
            </PaymentCard>
            <PaymentCard htmlFor="money-input">
              <input
                id="money-input"
                type="radio"
                value="money"
                {...register("paymentMethod")}
              />
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

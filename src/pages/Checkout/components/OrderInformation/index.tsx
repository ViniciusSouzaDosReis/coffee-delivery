import React from "react";
import { useContext } from "react";

import { Title } from "../../styles";
import {
  OrderInformationContainer,
  OrderInformationContent,
  PaymentInformationContainer,
} from "./style";

import { CartContext } from "../../../../contexts/CartContext";
import { CoffeeCard } from "./components/CoffeeCard";

function OrderInformation() {
  const { products, price } = useContext(CartContext);

  return (
    <OrderInformationContainer>
      <Title>Cafés selecionados</Title>
      <OrderInformationContent>
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <CoffeeCard
              image={product.imageUrl}
              amount={product.amount}
              price={product.price}
              title={product.title}
              id={product.id}
            />
            <hr />
          </React.Fragment>
        ))}
        <PaymentInformationContainer>
          <div>
            <div>Total de itens</div>
            <div>R$ {price.toFixed(2).toString().replace(".", ", ")}</div>
          </div>
          <div>
            <div>Entrega</div>
            <div>R$ 3,50</div>
          </div>
          <div>
            <strong>Total</strong>
            <strong>
              R$ {(price + 3.5).toFixed(2).toString().replace(".", ", ")}
            </strong>
          </div>
        </PaymentInformationContainer>
        <button type="submit">
          confirmar pedido
        </button>
      </OrderInformationContent>
    </OrderInformationContainer>
  );
}

export { OrderInformation };

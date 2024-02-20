import { Minus, Plus, Trash } from "phosphor-react";
import { Counter } from "../../../../../Home/components/CoffeeList/components/CoffeeCard/styles";
import {
  CoffeeCardContainer,
  CoffeeInfo,
  CoffeeImage,
  CoffeeDetails,
  Actions,
} from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";

interface CoffeeCardProps {
  image: string;
  title: string;
  amount: number;
  price: string;
  id: string;
}

function CoffeeCard({ image, title, amount, price, id }: CoffeeCardProps) {
  const { removeProduct, reduceProduct, includeProduct } =
    useContext(CartContext);

  const product = {
    imageUrl: image,
    title,
    price,
    id,
    amount,
  };

  function handleRemoveProduct() {
    removeProduct(product);
  }

  function handleReduceProduct() {
    if (amount > 1) reduceProduct(product);
  }

  function handleIncludeProduct() {
    includeProduct(product);
  }

  return (
    <CoffeeCardContainer>
      <CoffeeInfo>
        <CoffeeImage>
          <img src={image} alt="Imagem de um café" />
        </CoffeeImage>
        <CoffeeDetails>
          <span>{title}</span>
          <Actions>
            <Counter>
              <button type="button" onClick={() => handleReduceProduct()}>
                <Minus color="#8047F8" weight="bold" size={14} />
              </button>
              {amount}
              <button type="button" onClick={() => handleIncludeProduct()}>
                <Plus color="#8047F8" weight="bold" size={14} />
              </button>
            </Counter>
            <button type="button" onClick={() => handleRemoveProduct()}>
              <Trash color="#8047F8" size={16} />
              Remover
            </button>
          </Actions>
        </CoffeeDetails>
      </CoffeeInfo>
      <strong>R$ {price}</strong>
    </CoffeeCardContainer>
  );
}

export { CoffeeCard };

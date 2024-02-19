import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import {
  ActionsContainer,
  BuyContainer,
  CoffeeCardContainer,
  Counter,
  TagTypeCoffee,
  TagTypeCoffeeContainer,
} from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";

interface CoffeeCardProps {
  imageUrl: string;
  types: string[];
  title: string;
  description: string;
  price: string;
  id: string;
}

function CoffeeCard({
  imageUrl,
  types,
  title,
  description,
  price,
  id,
}: CoffeeCardProps) {
  const { addProduct } = useContext(CartContext);
  const [count, setCount] = useState(0);

  function handleAddProduct() {
    if (count > 0) {
      const product = {
        imageUrl,
        title,
        price,
        id,
        amount: count,
      };

      addProduct(product);

      setCount(0);
    }
  }

  return (
    <CoffeeCardContainer>
      <span>
        <img src={imageUrl} alt="Imagem de um café tradicional" />
      </span>
      <TagTypeCoffeeContainer>
        {types.map((type, index) => (
          <TagTypeCoffee key={`${type}__${index}`}>{type}</TagTypeCoffee>
        ))}
      </TagTypeCoffeeContainer>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <BuyContainer>
        <span>
          RS<strong>{price}</strong>
        </span>
        <ActionsContainer>
          <Counter>
            <button onClick={() => setCount(count - 1 < 0 ? 0 : count - 1)}>
              <Minus color="#8047F8" weight="bold" size={14} />
            </button>
            {count}
            <button onClick={() => setCount(count + 1)}>
              <Plus color="#8047F8" weight="bold" size={14} />
            </button>
          </Counter>
          <button onClick={() => handleAddProduct()}>
            <ShoppingCartSimple size={22} weight="fill" color="white" />
          </button>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}

export { CoffeeCard };

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import {
  ActionsContainer,
  BuyContainer,
  CoffeeCardContainer,
  Counter,
  TagTypeCoffee,
  TagTypeCoffeeContainer,
} from "./styles";

interface CoffeeCardProps {
  imageUrl: string;
  types: string[];
  title: string;
  description: string;
  price: string;
}

function CoffeeCard({
  imageUrl,
  types,
  title,
  description,
  price,
}: CoffeeCardProps) {
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
            <button>
              <Minus color="#8047F8" weight="bold" size={14} />
            </button>
            1
            <button>
              <Plus color="#8047F8" weight="bold" size={14} />
            </button>
          </Counter>
          <button>
            <ShoppingCartSimple size={22} weight="fill" color="white" />
          </button>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}

export { CoffeeCard };

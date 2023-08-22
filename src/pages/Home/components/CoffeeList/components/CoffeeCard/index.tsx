import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"

import {
  ActionsContainer,
  BuyContainer,
  CoffeeCardContainer,
  Counter,
  TagTypeCoffee
} from "./styles"

import coffeeImage from "../../images/Image.png"

function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <span>
        <img src={coffeeImage} alt='Imagem de um café tradicional' />
      </span>
      <TagTypeCoffee>
        tradicional
      </TagTypeCoffee>
      <div>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <BuyContainer>
        <span>
          RS<strong>9,90</strong>
        </span>
        <ActionsContainer>
          <Counter>
            <button>
              <Minus color='#8047F8' weight='bold' size={14} />
            </button>
            1
            <button>
              <Plus color='#8047F8' weight='bold' size={14} />
            </button>
          </Counter>
          <button>
            <ShoppingCartSimple size={22} weight='fill' color='white' />
          </button>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}

export { CoffeeCard }
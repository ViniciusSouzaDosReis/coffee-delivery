import { ShoppingCartSimple } from 'phosphor-react'

import coffeeImage from './images/Image.png'

import { CoffeeCardContainer, CoffeeListContainer } from './styles'

function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <div>
        <CoffeeCardContainer>
          <span>
            <img src={coffeeImage} alt='Imagem de um café tradicional' />
          </span>
          <span>
            TRADICIONAL
          </span>
          <div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </div>
          <span>
            <span>
              RS<strong>9,90</strong>
            </span>
            <span>
              <button>-</button>
              1
              <button>+</button>
            </span>
            <button>
              <ShoppingCartSimple size={22} weight='fill' color='white' />
            </button>
          </span>
        </CoffeeCardContainer>
      </div>
    </CoffeeListContainer>
  )
}

export { CoffeeList }
import { ShoppingCart, Package, Clock, Coffee } from "phosphor-react";

import imageCoffee from '../../../../assets/Imagem.png'

import { SectionIntroContainer } from './styles'

function SectionIntro() {
  return (
    <SectionIntroContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <div>
          <span>
            <span>
              <ShoppingCart size={16} color="white" weight="fill" />
            </span>
            Compra simples e segura
          </span>
          <span>
            <span>
              <Package size={16} color="white" weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </span>
          <span>
            <span>
              <Clock size={16} color="white" weight="fill" />
            </span>
            Entrega rápida e rastreada
          </span>
          <span>
            <span>
              <Coffee size={16} color="white" weight="fill" />
            </span>
            O café chega fresquinho até você
          </span>
        </div>
      </div>
      <span>
        <img src={imageCoffee} alt="" />
      </span>
    </SectionIntroContainer>
  )
}

export { SectionIntro }
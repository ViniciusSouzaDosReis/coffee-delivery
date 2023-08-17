import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/Logo.svg'

import { HeaderContainer } from './styles'

function Header() {
  
  return (
    <HeaderContainer>
      <span>
        <img src={logoCoffee} alt="" />
      </span>
      <div>
        <div>
          <MapPin
            size={24}
            color='#8047F8'
            weight='fill'
          />
          Porto Alegre, RS
        </div>
        <button>
          <ShoppingCart
            size={24}
            color='#C47F17'
            weight='fill'
          />
        </button>
      </div>
    </HeaderContainer>
  )
}

export { Header }
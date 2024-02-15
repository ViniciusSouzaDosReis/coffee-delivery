import { MapPin, ShoppingCart } from "phosphor-react";

import logoCoffee from "../../assets/Logo.svg";

import { HeaderContainer, CartContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

function Header() {
  const { products } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <span>
          <img src={logoCoffee} alt="" />
        </span>
      </NavLink>
      <div>
        <div>
          <MapPin size={24} color="#8047F8" weight="fill" />
          Porto Alegre, RS
        </div>
        <CartContainer>
          <NavLink to="checkout" title="Checkout">
            <button>
              <ShoppingCart size={24} color="#C47F17" weight="fill" />
            </button>
            {products.length > 0 ? <span>{products.length}</span> : ""}
          </NavLink>
        </CartContainer>
      </div>
    </HeaderContainer>
  );
}

export { Header };

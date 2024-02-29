import { version } from "../../package.json";
import { ReactNode, createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { OrderPaymentFormData } from "../pages/Checkout";
import {
  PaymentMethodTypes,
  translatePaymentMethodToPortugues,
} from "../utils/translatesFunctions";
import {
  cartReducer,
  placeOfDeliveryType,
  productType,
} from "../reducers/cart/reducer";
import {
  reduceProductAction,
  includeProductAction,
  addProductAction,
  removeProductAction,
  finalizeOrderAction,
} from "../reducers/cart/actions";

interface CartContextType {
  products: productType[];
  price: number;
  placeOfDelivery: placeOfDeliveryType;
  addProduct: (data: productType) => void;
  removeProduct: (daata: productType) => void;
  reduceProduct: (data: productType) => void;
  includeProduct: (data: productType) => void;
  finalizeOrder: (order: OrderPaymentFormData) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
      placeOfDelivery: {
        cep: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        uf: "",
        paymentMethod: "",
      },
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        `@coffee-delivery:cart-state-${version}`
      );

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);

      return initialState;
    }
  );

  const navigate = useNavigate();

  const { products, placeOfDelivery } = cartState;

  const price = products.reduce((acc, cur) => {
    const numberPrice = parseFloat(cur.price.replace(", ", "."));
    return numberPrice * cur.amount + acc;
  }, 0);

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);

    localStorage.setItem(`@coffee-delivery:cart-state-${version}`, stateJSON);
  }, [cartState]);

  function addProduct(data: productType) {
    dispatch(addProductAction(data));
  }

  function removeProduct(data: productType) {
    dispatch(removeProductAction(data));
  }

  function reduceProduct(data: productType) {
    dispatch(reduceProductAction(data));
  }

  function includeProduct(data: productType) {
    dispatch(includeProductAction(data));
  }

  function finalizeOrder(data: OrderPaymentFormData) {
    const paymentMethod = translatePaymentMethodToPortugues(
      data.paymentMethod as PaymentMethodTypes
    );

    const order = { ...data, paymentMethod };

    dispatch(finalizeOrderAction(order));
    navigate("success");
  }

  return (
    <CartContext.Provider
      value={{
        products,
        price,
        placeOfDelivery,
        addProduct,
        removeProduct,
        reduceProduct,
        includeProduct,
        finalizeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

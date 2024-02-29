import { produce } from "immer";
import { ReactNode, createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { OrderPaymentFormData } from "../pages/Checkout";
import {
  PaymentMethodTypes,
  translatePaymentMethodToPortugues,
} from "../utils/translatesFunctions";

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

interface productType {
  imageUrl: string;
  title: string;
  price: string;
  id: string;
  amount: number;
}

interface placeOfDeliveryType {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: string;
}

interface CartState {
  products: productType[];
  placeOfDelivery: placeOfDeliveryType;
}

enum CartActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  REDUCE_PRODUCT = "REDUCE_PRODUCT",
  INCLUDE_PRODUCT = "INCLUDE_PRODUCT",
  FINALIZE_ORDER = "FINALIZE_ORDER",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

interface payloadType {
  product: productType;
  placeOfDelivery?: placeOfDeliveryType;
}

interface Action {
  type: CartActionTypes;
  payload?: payloadType;
}

// interface ActionType{

// }

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    (state: CartState, action: Action) => {
      const { payload } = action;
      if (payload) {
        switch (action.type) {
          case CartActionTypes.ADD_PRODUCT:
            return produce(state, (draft) => {
              const haveThisProductInCart = draft.products.find(
                (product) => product.id === payload.product.id
              );
              if (haveThisProductInCart) {
                draft.products.map((product) => {
                  if (product.id === payload.product.id) {
                    product.amount += payload.product.amount;
                  }
                });
              } else {
                draft.products.push(payload.product);
              }
            });
          case CartActionTypes.REMOVE_PRODUCT:
            return produce(state, (draft) => {
              const productsWithoutThisProduct = draft.products.filter(
                (product) => {
                  return product.id !== payload.product.id;
                }
              );

              draft.products = productsWithoutThisProduct;
            });

          case CartActionTypes.REDUCE_PRODUCT:
            return produce(state, (draft) => {
              draft.products.map((product) => {
                if (product.id === payload.product.id) {
                  product.amount -= 1;
                }
              });
            });

          case CartActionTypes.INCLUDE_PRODUCT:
            return produce(state, (draft) => {
              draft.products.map((product) => {
                if (product.id === payload.product.id) {
                  product.amount += 1;
                }
              });
            });

          case CartActionTypes.FINALIZE_ORDER:
            return produce(state, (draft) => {
              draft.products = [];
              if (payload.placeOfDelivery)
                draft.placeOfDelivery = payload.placeOfDelivery;
            });
          default:
            return state;
        }
      } else {
        return state;
      }
    },
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
      return initialState;
    }
  );

  const navigate = useNavigate();

  const { products, placeOfDelivery } = cartState;

  const price = products.reduce((acc, cur) => {
    const numberPrice = parseFloat(cur.price.replace(", ", "."));
    return numberPrice * cur.amount + acc;
  }, 0);

  function addProduct(data: productType) {
    const action = {
      type: CartActionTypes.ADD_PRODUCT,
      payload: {
        product: data,
      },
    };

    dispatch(action);
  }

  function removeProduct(data: productType) {
    const action = {
      type: CartActionTypes.REMOVE_PRODUCT,
      payload: {
        product: data,
      },
    };

    dispatch(action);
  }

  function reduceProduct(data: productType) {
    const action = {
      type: CartActionTypes.REDUCE_PRODUCT,
      payload: {
        product: data,
      },
    };

    dispatch(action);
  }

  function includeProduct(data: productType) {
    const action = {
      type: CartActionTypes.INCLUDE_PRODUCT,
      payload: {
        product: data,
      },
    };

    dispatch(action);
  }

  function finalizeOrder(order: OrderPaymentFormData) {
    const paymentMethod = translatePaymentMethodToPortugues(
      order.paymentMethod as PaymentMethodTypes
    );

    const action = {
      type: CartActionTypes.FINALIZE_ORDER,
      payload: {
        product: {
          imageUrl: "",
          title: "",
          price: "",
          id: "",
          amount: 0,
        },
        placeOfDelivery: { ...order, paymentMethod },
      },
    };

    dispatch(action);
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

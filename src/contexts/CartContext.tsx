import { produce } from "immer";
import { ReactNode, createContext, useReducer } from "react";

interface CartContextType {
  products: productType[];
  addProduct: (data: productType) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

interface productType {
  imageUrl: string;
  title: string;
  price: string;
}

interface CartState {
  products: productType[];
}

enum CartActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

interface payloadType {
  product: productType;
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
              draft.products.push(payload.product);
            });
          default:
            return state;
        }
      } else {
        return state;
      }
    },
    { products: [] },
    (initialState) => {
      return initialState;
    }
  );

  const { products } = cartState;

  function addProduct(data: productType) {
    const action = {
      type: CartActionTypes.ADD_PRODUCT,
      payload: {
        product: data,
      },
    };

    dispatch(action);
  }

  return (
    <CartContext.Provider value={{ addProduct, products }}>
      {children}
    </CartContext.Provider>
  );
}

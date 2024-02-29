import { produce } from "immer";
import { CartActionTypes } from "./actions";

export interface productType {
  imageUrl: string;
  title: string;
  price: string;
  id: string;
  amount: number;
}

export interface placeOfDeliveryType {
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

interface payloadType {
  product: productType;
  placeOfDelivery?: placeOfDeliveryType;
}

interface Action {
  type: CartActionTypes;
  payload?: payloadType;
}

export function cartReducer(state: CartState, action: Action) {
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
}

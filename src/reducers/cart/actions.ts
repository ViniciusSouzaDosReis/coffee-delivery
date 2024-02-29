import { OrderPaymentFormData } from "../../pages/Checkout";
import { productType } from "./reducer";

export enum CartActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  REDUCE_PRODUCT = "REDUCE_PRODUCT",
  INCLUDE_PRODUCT = "INCLUDE_PRODUCT",
  FINALIZE_ORDER = "FINALIZE_ORDER",
}

export function reduceProductAction(product: productType) {
  return {
    type: CartActionTypes.REDUCE_PRODUCT,
    payload: {
      product: product,
    },
  };
}

export function includeProductAction(product: productType) {
  return {
    type: CartActionTypes.INCLUDE_PRODUCT,
    payload: {
      product: product,
    },
  };
}

export function addProductAction(product: productType) {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload: {
      product: product,
    },
  };
}

export function removeProductAction(product: productType) {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: {
      product: product,
    },
  };
}

export function finalizeOrderAction(order: OrderPaymentFormData) {
  return {
    type: CartActionTypes.FINALIZE_ORDER,
    payload: {
      product: {
        imageUrl: "",
        title: "",
        price: "",
        id: "",
        amount: 0,
      },
      placeOfDelivery: order,
    },
  };
}

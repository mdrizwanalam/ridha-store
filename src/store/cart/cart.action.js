import { cartsType } from "./cart.types";

export const addToCart = (payload) => {
  return (dispatch) => {
    dispatch({ type: cartsType.ADD_TO_CART, payload });
    console.log("item added",payload)
  };
};

export const removeFromCart = (payload) => {
  console.log("payload",payload);
  return (dispatch) => {
    dispatch({ type: cartsType.REMOVE_FROM_CART, payload });
  };
};

import { addToCart, removeFromCart } from "./actions";
import { v4 as uuidv4 } from "uuid";

export const addToCartThunk = (product, i) => {
  return async (dispatch, getState) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    list.push(product);
    list[list.length - 1]["id"] = uuidv4();
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(addToCart(product));
  };
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};

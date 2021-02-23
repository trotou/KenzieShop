import { createStore, combineReducers } from "redux";

//A gente importa nossos reducers
import cartReducer from "../store/modules/cart/reducer";
import productsReducer from "../store/modules/products/reducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(reducers);

export default store;

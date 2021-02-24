import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//A gente importa nossos reducers
import { cartReducer } from "../store/modules/cart/reducer";
import productsReducer from "../store/modules/products/reducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

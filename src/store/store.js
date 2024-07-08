import { createStore, applyMiddleware, combineReducers } from "redux";
import CartReducer from "./cart/cart.reducer";
import ProductReducer from "./product/product.reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

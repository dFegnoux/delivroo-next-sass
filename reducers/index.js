import { combineReducers } from "redux";
import { cartReducers } from "./cartReducers";

export const reducer = combineReducers({
  cart: cartReducers
});

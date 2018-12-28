import { SAVE_CART } from "../actions/cartActions";

const initialState = {};

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CART:
      return action.payload;
    default:
      return state;
  }
};

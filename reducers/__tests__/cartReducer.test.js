import { cartReducers } from "../cartReducers";
import { SAVE_CART } from "../../actions/cartActions";

describe("Cart reducer", () => {
  it("should return a default value", () => {
    expect(cartReducers(undefined, {})).toEqual({});
  });

  it("should handles SAVE_CART", () => {
    // Given
    const action = { type: SAVE_CART, payload: { foo: "bar" } };

    // Then
    expect(cartReducers(undefined, action)).toEqual(action.payload);
  });
});

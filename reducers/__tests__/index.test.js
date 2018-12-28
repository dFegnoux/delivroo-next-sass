import { createStore } from "redux";
import { reducer } from "../index";
import { cartReducers } from "../cartReducers";

// What can you test on root reducer ?
// Not much... just test that it don't crash and default values are enough
// You can test that it can handle a specific child action but it's maybe too much

it("should not crashing with default values", () => {
  const store = createStore(reducer);

  expect(store.getState().cart).toEqual(cartReducers(undefined, {}));
});

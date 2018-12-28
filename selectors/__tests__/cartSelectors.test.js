import { getCart } from "../cartSelectors";

it("should retrieve well cart from state", () => {
  // Given
  const state = { cart: { foo: "bar" } };

  // When
  const result = getCart(state);

  // Then
  expect(result).toEqual(state.cart);
});

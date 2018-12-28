import { formatToPriceString, saveCartToStorage } from "../cartHelpers";

it("should format a price to string", () => {
  // Given
  const prices = [2, 3.5, 5.42];

  // When
  const results = prices.map(price => formatToPriceString(price));

  // Then
  const expected = ["2,00 €", "3,50 €", "5,42 €"];
  expect(results).toEqual(expected);
});

it("should ", () => {});

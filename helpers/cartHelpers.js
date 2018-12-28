/**
 * Format a number to a price standard string
 * @param {Number} number
 * @returns {String}
 */
export function formatToPriceString(number) {
  return `${number.toFixed(2).replace(".", ",")} €`;
}

/**
 * Save the cart to local storage,
 * cart item is provided by the component's state
 */
export function saveCartToStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

import { formatToPriceString } from "../helpers/cartHelpers";
export function getCart(state) {
  return state.cart;
}

/**
 * Get a simple addition of every elements of cart to get the totalRaw
 * @param {Object} objCartMenus : The cart menus object
 * @returns {Number}
 */
export function getCartTotalPrice(state) {
  const cartMenus = Object.entries(state.cart);
  let totalRaw = 0;

  cartMenus.forEach(menu => {
    totalRaw += menu[1].price * menu[1].quantity;
  });

  return formatToPriceString(totalRaw);
}

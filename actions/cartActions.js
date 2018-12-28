import { saveCartToStorage } from "../helpers/cartHelpers";

export const SAVE_CART = "SAVE_CART";

/**
 * Init cart state with data from localStorage or empty
 */
export const initCart = () => {
  const retrievedCart = localStorage.getItem("cart");
  const cart = retrievedCart ? JSON.parse(retrievedCart) : {};
  return {
    type: SAVE_CART,
    payload: cart
  };
};

/**
 * Add, remove menus from cart
 * @param {Object} menu : A menu object from delivroo API
 * @param {String} action : 'add' or 'remove'
 */
export const updateCart = (menu, action) => {
  return (dispatch, getState) => {
    // Copy cart from state
    const cart = { ...getState().cart };

    // Get previous item if it already exists
    const previousItem = cart.hasOwnProperty(menu.id) ? cart[menu.id] : null;

    let newQuantity = previousItem ? previousItem.quantity : 0;
    if (action === "remove") {
      newQuantity--;
    } else {
      newQuantity++;
  }

    // If the new quantity isn't falsy
    if (newQuantity) {
      cart[menu.id] = {
        ...menu,
        name: menu.title,
        quantity: newQuantity
      };
    } else {
      delete cart[menu.id];
    }

    // Should save state to storage in any case !
    saveCartToStorage(cart);

    // Call reducer with new cart
    dispatch({
      type: SAVE_CART,
      payload: cart
    });
  };
};

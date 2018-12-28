import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { saveCartToStorage } from "../../helpers/cartHelpers";
import { initCart, updateCart, SAVE_CART } from "../cartActions";

jest.mock("../../helpers/cartHelpers");

saveCartToStorage.mockImplementationOnce();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Cart initialization action", () => {
  beforeEach(() => {
    localStorage.removeItem("cart");
  });

  it("should properly create action", () => {
    // Given
    const storedCart = { foo: "bar" };
    const expected = {
      type: SAVE_CART,
      payload: storedCart
    };
    localStorage.setItem("cart", JSON.stringify(storedCart));

    // When
    const result = initCart();

    // Then
    expect(result).toEqual(expected);
  });

  it("should handles when there is no cart in localstorage", () => {
    // Given
    const expected = {
      type: SAVE_CART,
      payload: {}
    };

    // When
    const result = initCart();

    // Then
    expect(result).toEqual(expected);
  });
});

describe("Cart update action", () => {
  it("should properly create action", () => {
    // Given
    const initialState = { cart: {} };
    const store = mockStore(initialState);
    const menu = { id: "foo", title: "bar" };
    const updateAction = "add";

    // When
    store.dispatch(updateCart(menu, updateAction));

    // Then
    const expected = {
      type: SAVE_CART,
      payload: {
        [menu.id]: { ...menu, name: menu.title, quantity: 1 }
      }
    };
    const actions = store.getActions();
    expect(saveCartToStorage).toHaveBeenCalled();
    expect(actions).toEqual([expected]);
  });

  it("should add menu if it doesn't already exists", () => {
    // Given
    const initialState = { cart: {} };
    const store = mockStore(initialState);
    const menu = { id: "foo", title: "bar" };
    const updateAction = "add";

    // When
    store.dispatch(updateCart(menu, updateAction));

    // Then
    const expected = {
      type: SAVE_CART,
      payload: {
        [menu.id]: { ...menu, name: menu.title, quantity: 1 }
      }
    };
    const actions = store.getActions();
    expect(actions[0].payload.hasOwnProperty(menu.id)).toBe(true);
  });

  it("should remove menu when it's quantity reaches zero", () => {
    // Given
    const menu = { id: "foo", title: "bar" };
    const initialState = {
      cart: {
        [menu.id]: {
          ...menu,
          quantity: 1
        }
      }
    };
    const store = mockStore(initialState);
    const updateAction = "remove";

    // When
    store.dispatch(updateCart(menu, updateAction));

    // Then
    const actions = store.getActions();
    expect(actions[0].payload.hasOwnProperty(menu.id)).toBe(false);
  });

  it("should be able to add a menu", () => {
    // Given
    const menu = { id: "foo", title: "bar" };
    const initialState = {
      cart: {
        [menu.id]: {
          ...menu,
          quantity: 1
        }
      }
    };
    const store = mockStore(initialState);

    // When
    store.dispatch(updateCart(menu, "add"));

    // Then
    let cartQuantity = store.getActions()[0].payload[menu.id].quantity;
    expect(cartQuantity).toBe(2);
  });

  it("should be able to remove a menu", () => {
    // Given
    const menu = { id: "foo", title: "bar" };
    const initialState = {
      cart: {
        [menu.id]: {
          ...menu,
          quantity: 2
        }
      }
    };
    const store = mockStore(initialState);

    // When
    store.dispatch(updateCart(menu, "remove"));

    // Then
    let cartQuantity = store.getActions()[0].payload[menu.id].quantity;
    expect(cartQuantity).toBe(1);
  });
});

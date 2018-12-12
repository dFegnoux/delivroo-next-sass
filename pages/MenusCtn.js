import React, { Component, Fragment } from "react";
import axios from "axios";
import RestaurantBlock from "../components/blocks/RestaurantBlock";
import PacmanLoader from "react-spinners/PacmanLoader";
import Menu from "../components/menu/Menu";
import { formatMenus } from "../helpers/menuHelpers";
import "../components/menu/menu.scss";

class CartValidationCtn extends Component {
  state = {
    cart: {},
    showPayment: false
  };

  // Server side et avant le premier render
  static async getInitialProps() {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");

    if (response.data instanceof Object) {
      return {
        menu: formatMenus(response.data.menu),
        restaurant: response.data.restaurant || {}
      };
    }

    return {
      menu: [],
      restaurant: {}
    };
  }

  /**
   * Save the cart to local storage,
   * cart item is provided by the component's state
   */
  saveCartToStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  /**
   * Add, remove menus from cart
   * @param {Object} menu : A menu object from delivroo API
   * @param {String} action : 'add' or 'remove'
   */
  updateCart = (menu, action) => {
    // Get previous item if it already exists
    const previousItem = this.state.cart.hasOwnProperty(menu.id)
      ? this.state.cart[menu.id]
      : null;

    let newQuantity = previousItem ? previousItem.quantity : 0;
    if (action === "remove") {
      newQuantity--;
    } else {
      newQuantity++;
    }

    if (newQuantity) {
      this.setState(
        () => ({
          cart: {
            ...this.state.cart,
            [menu.id]: {
              ...menu,
              name: menu.title,
              quantity: newQuantity
            }
          }
        }),
        this.saveCartToStorage
      );
    } else {
      const newCart = {
        ...this.state.cart
      };

      delete newCart[menu.id];

      this.setState(() => ({ cart: newCart }), this.saveCartToStorage);
    }
  };

  componentDidMount() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.setState(() => ({ cart: JSON.parse(savedCart) }));
    }
  }

  render() {
    const { cart, showPayment } = this.state;
    const { menu, restaurant } = this.props;

    return (
      <Fragment>
        {Object.keys(restaurant).length > 0 && (
          <RestaurantBlock
            name={restaurant.name}
            description={restaurant.description}
            picture={restaurant.picture}
          />
        )}
        <div className="layoutPageContent layoutLimitedWidth">
          {!menu.length ? (
            <PacmanLoader />
          ) : (
            <Menu
              categories={menu}
              updateCart={this.updateCart}
              cart={cart}
              showPayment={showPayment}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default CartValidationCtn;

import React, { Component } from "react";
import DeliveryForm from "../components/forms/DeliveryForm";
import Cart from "../components/menu/Cart";
import PageHelmet from "../components/PageHelmet";

class Menus extends Component {
  state = {
    cart: {},
    showCardForm: false
  };

  render() {
    const { cart } = this.state;

    return (
      <div className="menuLayout">
        <PageHelmet title="Validate your order" />
        <div className="menuContentWrapper">
          <DeliveryForm />
        </div>
        <Cart menus={cart} disableButtons />
      </div>
    );
  }

  componentDidMount() {
    const retrievedCart = window.localStorage.getItem("cart");
    if (retrievedCart) {
      this.setState(() => ({
        cart: JSON.parse(retrievedCart)
      }));
    }
  }
}

export default Menus;

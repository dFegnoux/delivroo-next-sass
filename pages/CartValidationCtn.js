import React, { Component } from "react";
import PaymentForm from "../components/forms/PaymentForm";
import Cart from "../components/menu/Cart";

class Menus extends Component {
  state = {
    cart: {}
  };

  render() {
    const { cart } = this.state;

    return (
      <div className="menuLayout">
        <div className="menuContentWrapper">
          <PaymentForm />
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

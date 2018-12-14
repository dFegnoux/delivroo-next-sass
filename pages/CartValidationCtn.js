import React, { Component } from "react";
import PaymentForm from "../components/forms/PaymentForm";
import Cart from "../components/menu/Cart";
import Helmet from "react-helmet";
import PageHelmet from "../components/PageHelmet";

class Menus extends Component {
  state = {
    cart: {}
  };

  render() {
    const { cart } = this.state;

    return (
      <div className="menuLayout">
        <PageHelmet title="Validate your order" />
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

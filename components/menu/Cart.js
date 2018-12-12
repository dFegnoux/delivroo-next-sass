import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import QuantityModifier from "./QuantityModifier";
import {
  calculateCartTotalPrice,
  formatToPriceString
} from "../../helpers/cartHelpers";
import "./cart.scss";

class Cart extends Component {
  static propTypes = {
    menus: PropTypes.object.isRequired,
    updateCart: PropTypes.func,
    disableButtons: PropTypes.bool
  };

  static defaultProps = {
    disableButtons: true,
    updateCart: () => {
      console.warning(
        "Trying to update with the default updateCart function, you may want to use a real function ;)"
      );
    }
  };

  render() {
    const { menus, updateCart, disableButtons } = this.props;
    const selectedMenus = Object.entries(menus);
    const isBtnDisabled = !selectedMenus.length ? "disabled" : null;

    return (
      <div className="cartWrapper">
        <div className="cart roundedItem">
          {!disableButtons && (
            <Link href="/cart/validation">
              <a className="btn" disabled={isBtnDisabled}>
                Valider mon panier
              </a>
            </Link>
          )}
          {selectedMenus.length ? (
            <Fragment>
              <ul>
                {selectedMenus.map(menu => (
                  <li key={menu[0]}>
                    <QuantityModifier
                      item={menu[1]}
                      updateCart={updateCart}
                      disabled={disableButtons}
                    />
                    <span className="itemName">{menu[1].name}</span>
                    <span className="total">
                      {formatToPriceString(menu[1].price * menu[1].quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mainTotal">
                <span>Total : </span>
                <span>{calculateCartTotalPrice(menus)}</span>
              </div>
            </Fragment>
          ) : (
            <div>Votre panier est vide</div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;

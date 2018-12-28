import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QuantityModifier from "./QuantityModifier";
import { formatToPriceString } from "../../helpers/cartHelpers";
import { updateCart } from "../../actions/cartActions";
import { getCart, getCartTotalPrice } from "../../selectors/cartSelectors";
import "./cart.scss";
import Button from "../UX/Button";

export class Cart extends Component {
  static propTypes = {
    disableButtons: PropTypes.bool
  };

  static defaultProps = {
    disableButtons: true
  };

  render() {
    const { menus, updateCart, disableButtons, totalCartPrice } = this.props;
    const selectedMenus = Object.entries(menus);
    const isBtnDisabled = !selectedMenus.length;

    return (
      <div className="cartWrapper">
        <div className="cart roundedItem">
          {!disableButtons && (
            <Button
              href="/cart/validation"
              className="fullWidth"
              disabled={isBtnDisabled}
              label="Valider mon panier"
            />
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
                <span>{totalCartPrice}</span>
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

const mapStateToProps = state => ({
  menus: getCart(state),
  totalCartPrice: getCartTotalPrice(state)
});

export default connect(
  mapStateToProps,
  { updateCart: updateCart }
)(Cart);

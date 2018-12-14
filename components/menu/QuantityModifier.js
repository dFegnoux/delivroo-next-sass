import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "../UX/Button";

class QuantityModifier extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    updateCart: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  addItemToCart = () => {
    const { updateCart, item } = this.props;
    updateCart(item, "add");
  };

  removeItemToCart = () => {
    const { updateCart, item } = this.props;
    updateCart(item, "remove");
  };

  render() {
    const {
      item: { quantity },
      disabled
    } = this.props;

    return (
      <div className="quantityModifier">
        {!disabled && (
          <Button
            className="remove small"
            label="-"
            handleClick={this.removeItemToCart}
          />
        )}
        <span className="quantity">{quantity}</span>
        {!disabled && (
          <Button
            className="add small"
            label="+"
            handleClick={this.addItemToCart}
          />
        )}
      </div>
    );
  }
}

export default QuantityModifier;

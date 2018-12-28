import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuCategory from "./MenuCategory";
import Cart from "./Cart";
import "./menu.scss";

class MenuCategories extends PureComponent {
  static propTypes = {
    categories: PropTypes.array,
    updateCart: PropTypes.func.isRequired
  };

  static defaultProps = {
    categories: []
  };

  render() {
    const { categories, updateCart, showPayment } = this.props;

    return (
      <div className="menuLayout">
        <div className="menuContentWrapper">
          {categories.map(category => (
            <MenuCategory
              key={category[0]}
              title={category[0]}
              menus={category[1]}
              updateCart={updateCart}
            />
          ))}
        </div>
        <Cart disableButtons={showPayment} />
      </div>
    );
  }
}

export default MenuCategories;

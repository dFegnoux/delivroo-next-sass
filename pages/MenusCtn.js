import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getCart } from "../selectors/cartSelectors";
import { initCart, updateCart } from "../actions/cartActions";
import RestaurantBlock from "../components/blocks/RestaurantBlock";
import PacmanLoader from "react-spinners/PacmanLoader";
import Menu from "../components/menu/Menu";
import { formatMenus } from "../helpers/menuHelpers";
import "../components/menu/menu.scss";
import PageHelmet from "../components/PageHelmet";

export class MenusCtn extends Component {
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

  componentDidMount() {
    this.props.initCart();
  }

  render() {
    const { showPayment } = this.state;
    const { menu, restaurant, updateCart } = this.props;

    return (
      <Fragment>
        {Object.keys(restaurant).length > 0 && (
          <Fragment>
            <PageHelmet
              title={`${restaurant.name} menu`}
              description={`Order some magnificient food from ${
                restaurant.name
              } restaurant now!`}
            />
            <RestaurantBlock
              name={restaurant.name}
              description={restaurant.description}
              picture={restaurant.picture}
            />
          </Fragment>
        )}
        <div className="layoutPageContent layoutLimitedWidth">
          {!menu.length ? (
            <PacmanLoader />
          ) : (
            <Menu
              categories={menu}
              updateCart={updateCart}
              showPayment={showPayment}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  undefined,
  { updateCart: updateCart, initCart: initCart }
)(MenusCtn);

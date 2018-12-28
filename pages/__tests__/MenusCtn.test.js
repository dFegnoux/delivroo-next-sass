import React from "react";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import ConnectedMenuCtn, { MenusCtn } from "../MenusCtn";
import mockAxios from "jest-mock-axios";

import PageHelmet from "../../components/PageHelmet";
import RestaurantBlock from "../../components/blocks/RestaurantBlock";
import PacmanLoader from "react-spinners/PacmanLoader";
import Menu from "../../components/menu/Menu";

describe("MenusCtn getInitialProps", () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  it("Should set values retrieved by axios", async () => {
    MenusCtn.getInitialProps();
    mockAxios.mockResponse({ data: { restaurant: {}, menu: {} } });

    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://deliveroo-api.now.sh/menu"
    );
  });

  it("Should handle when call returns no restaurant", async () => {
    MenusCtn.getInitialProps();
    mockAxios.mockResponse({ data: { menu: {} } });

    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://deliveroo-api.now.sh/menu"
    );
  });

  it("Should set default values when axios answer isn't satisfying", async () => {
    MenusCtn.getInitialProps();
    mockAxios.mockResponse({ data: "" });

    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://deliveroo-api.now.sh/menu"
    );
  });
});

describe("Menus container lifecycle", () => {
  it("should call cart initialization at didMount", () => {
    // Given
    const props = {
      cart: {},
      menu: [],
      restaurant: {},
      initCart: jest.fn()
    };

    // When
    shallow(<MenusCtn {...props} />);

    // Then
    expect(props.initCart).toHaveBeenCalled();
  });
});

describe("Menus container render", () => {
  const defaultProps = {
    cart: {},
    menu: [],
    restaurant: {},
    initCart: jest.fn(),
    updateCart: jest.fn()
  };
  it("Should handle empty props", () => {
    // When
    const container = shallow(<MenusCtn {...defaultProps} />);

    // Then
    expect(container.find(PageHelmet).length).toBe(0);
    expect(container.find(RestaurantBlock).length).toBe(0);
    expect(container.find(PacmanLoader).length).toBe(1);
    expect(container.find(Menu).length).toBe(0);
  });

  it("Should handle fullfilled restaurant and menu props", () => {
    // Given
    const props = {
      ...defaultProps,
      restaurant: { name: "foo" },
      menu: ["foo"]
    };

    // When
    const container = shallow(<MenusCtn {...props} />);

    // Then
    expect(container.find(PageHelmet).length).toBe(1);
    expect(container.find(RestaurantBlock).length).toBe(1);
    expect(container.find(PacmanLoader).length).toBe(0);
    expect(container.find(Menu).length).toBe(1);
  });

  it("should get data from store", () => {
    // Given
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const initialState = { cart: {} };
    const store = mockStore(initialState);

    // When
    container = shallow(<ConnectedMenuCtn store={store} />);

    // Then
    expect(container.props().cart).toEqual({});
  });
});

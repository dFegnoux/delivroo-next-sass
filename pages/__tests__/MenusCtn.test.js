import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import MenusCtn from "../MenusCtn";
import mockAxios from "jest-mock-axios";

const mandatoryProps = {
  menu: [],
  restaurant: {}
};

describe("MenusCtn snapshots", () => {
  const filledProps = {
    restaurant: {
      name: "Mocked restaurant",
      description: "Mocked restaurant description",
      picture: "Mocked restaurant picture"
    },
    menu: [["category1", [{ id: "mockedId1", description: "" }]]]
  };
  it("should render correctly", () => {
    const tree = renderer.create(<MenusCtn {...mandatoryProps} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render correctly with a restaurant and menus", () => {
    const tree = renderer.create(<MenusCtn {...filledProps} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("MenusCtn lifecycle", () => {
  afterEach(() => {
    localStorage.removeItem("cart");
  });
  it("Should retrieve cart from localStorage", () => {
    const cartToRetrieve = {
      storageCartItemId: { title: "storage item", quantity: 1 }
    };
    localStorage.setItem("cart", JSON.stringify(cartToRetrieve));
    const container = shallow(<MenusCtn {...mandatoryProps} />);
    expect(container.state("cart")).toEqual(cartToRetrieve);
  });
});

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

describe("MenusCtn functions", () => {
  const container = shallow(<MenusCtn {...mandatoryProps} />);
  const CtnInstance = container.instance();
  const newItem = { title: "my mocked item", id: "mockedId" };
  it("should be able to save in localStorage", () => {
    CtnInstance.saveCartToStorage();
    expect(localStorage.setItem).toHaveBeenCalledWith("cart", "{}");
  });

  it("should add an item to cart", () => {
    CtnInstance.updateCart(newItem, "add");
    const cartState = container.state("cart");
    expect(Object.keys(cartState).length).toBe(1);
    expect(Object.keys(cartState)[0]).toBe(newItem.id);
    expect(cartState[newItem.id].quantity).toBe(1);
  });

  it("should update quantity of an existing item to cart", () => {
    CtnInstance.updateCart(newItem, "add");
    expect(container.state("cart")[newItem.id].quantity).toBe(2);

    CtnInstance.updateCart(newItem, "remove");
    expect(container.state("cart")[newItem.id].quantity).toBe(1);
  });

  it("should remove an item to cart when its quantity drop to zero", () => {
    CtnInstance.updateCart(newItem, "remove");
    const cartState = container.state("cart");
    expect(Object.keys(cartState).length).toBe(0);
  });
});

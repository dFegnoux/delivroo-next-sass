import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Cart from "../Cart";

const mockedMenus = {
  menu1: {
    id: "menu1",
    title: "title menu1",
    description: "desc menu1",
    price: "15.00",
    picture: "//www.placekitten.com/100/100",
    quantity: 1
  },
  menu2: {
    id: "menu2",
    title: "title menu2",
    description: "desc menu2",
    price: "5.00",
    picture: "//www.placekitten.com/100/100",
    quantity: 3
  }
};
const mockUpdateCart = jest.fn();
const props = {
  menus: mockedMenus,
  updateCart: mockUpdateCart,
  disableButtons: false
};
const container = shallow(<Cart {...props} />);

it("renders correctly", () => {
  const tree = renderer.create(<Cart {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("should have as many list item as menus", () => {
  expect(container.find("li").length).toBe(2);
});

it("should have an updateCart default function", () => {
  expect(Cart.defaultProps.updateCart).toBeDefined();
});

describe("Validate button", () => {
  afterEach(() => {
    container.setProps(props);
  });

  it("should be displayed if props say so", () => {
    expect(container.find("Button").length).toBe(1);
    container.setProps({ disableButtons: true });
    expect(container.find("Button").length).toBe(0);
  });

  it("should be displayed as disabled with an empty cart", () => {
    container.setProps({ menus: {} });
    expect(container.find("Button").props().disabled).toBeTruthy();
  });
});

describe("When Cart is instanciate without UpdateCart function", () => {
  const noFnContainer = shallow(<Cart menus={{}} />);

  it("should render correctly", () => {
    const snapshot = renderer.create(<Cart menus={{}} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it("should warn user when trying to use default update function", () => {
    noFnContainer.instance().props.updateCart();
    expect(console.warning).toHaveBeenCalled();
  });
});

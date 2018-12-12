import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import CartValidationCtn from "../CartValidationCtn";

describe("CartValidationCtn snapshots", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<CartValidationCtn />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("CartValidationCtn lifecylce", () => {
  afterEach(() => {
    localStorage.removeItem("cart");
  });
  it("Should retrieve cart from localStorage", () => {
    const cartToRetrieve = {
      storageCartItemId: { title: "storage item", quantity: 1 }
    };
    localStorage.setItem("cart", JSON.stringify(cartToRetrieve));
    const container = shallow(<CartValidationCtn />);
    expect(container.state("cart")).toEqual(cartToRetrieve);
  });
});

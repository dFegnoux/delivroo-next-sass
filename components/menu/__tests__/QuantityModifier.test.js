import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import QuantityModifier from "../QuantityModifier";

const props = {
  item: {
    quantity: 3
  },
  updateCart: jest.fn()
};
const container = shallow(<QuantityModifier {...props} />);

describe("QuantityModifiers snapshots", () => {
  it("should render correctly with default props", () => {
    const tree = renderer.create(<QuantityModifier {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with disabled buttons", () => {
    const tree = renderer
      .create(<QuantityModifier disabled {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Modifiers actions", () => {
  it("should correctly fired updateCart function", () => {
    container.find(".remove").simulate("click");
    expect(props.updateCart).toHaveBeenCalledWith(props.item, "remove");

    container.find(".add").simulate("click");
    expect(props.updateCart).toHaveBeenCalledWith(props.item, "add");
  });
});

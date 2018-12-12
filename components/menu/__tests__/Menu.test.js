import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Menu from "../Menu";

const mandatoryProps = {
  updateCart: jest.fn(),
  cart: {}
};
const container = shallow(<Menu {...mandatoryProps} />);

describe("Menu snapshots", () => {
  it("should render correctly with default props", () => {
    const tree = renderer.create(<Menu {...mandatoryProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly some categories", () => {
    const categories = Object.entries({
      menu1: [
        {
          title: "mocked title",
          image: "mocked image",
          id: "mocked id",
          description: "mocked description"
        }
      ]
    });
    const tree = renderer
      .create(<Menu categories={categories} {...mandatoryProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

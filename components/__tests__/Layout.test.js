import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Layout from "../Layout";

describe("Layout snapshots", () => {
  it("should render correctly with default props", () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it("Should fire themeChange props on select change", () => {
  const mockFunction = jest.fn();
  const container = shallow(<Layout changeTheme={mockFunction} />);
  container
    .find("select")
    .simulate("change", { currentTarget: { value: "toto" } });
  expect(mockFunction).toHaveBeenCalledWith("toto");
});

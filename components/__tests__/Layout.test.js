import React from "react";
import renderer from "react-test-renderer";
import Layout from "../Layout";

describe("Layout snapshots", () => {
  it("should render correctly with default props", () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

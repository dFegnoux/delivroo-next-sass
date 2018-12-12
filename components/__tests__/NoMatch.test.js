import React from "react";
import renderer from "react-test-renderer";
import NoMatch from "../NoMatch";

describe("NoMatch snapshots", () => {
  it("should render correctly with default props", () => {
    const tree = renderer.create(<NoMatch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

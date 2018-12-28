import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Layout from "../Layout";

import { Link } from "next";
import DelivrooLogo from "../images/DelivrooLogo";

describe("Layout dom", () => {
  // Given
  it("should render correctly with default props", () => {
    const children = "Toto";
    const container = shallow(<Layout>{children}</Layout>);

    // Then
    expect(container.find(".layout").length).toBe(1);
    expect(container.find(".header").length).toBe(1);
    expect(container.find("Link").length).toBe(1);
    expect(container.find(DelivrooLogo).length).toBe(1);
    expect(container.find("select").length).toBe(1);

    expect(container.find(".layoutContent").length).toBe(1);
    expect(container.find(".layoutContent").text()).toBe(children);
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

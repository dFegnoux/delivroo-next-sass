import React from "react";
import { shallow } from "enzyme";
import PageHelmet from "../PageHelmet";

it("should display a title", () => {
  const pageTitle = "Page title";
  const component = shallow(<PageHelmet title={pageTitle} />);
  const titleSelector = component.find("title");
  expect(titleSelector.length).toBe(1);
  expect(titleSelector.contains(pageTitle)).toBeTruthy();
});

it("should display a description", () => {
  const pageDescription = "Page description";
  const component = shallow(<PageHelmet description={pageDescription} />);
  const descriptionSelector = component.find('meta[name="description"]');
  expect(descriptionSelector.length).toBe(1);
  expect(descriptionSelector.props().name).toBe("description");
  expect(descriptionSelector.props().content).toBe(pageDescription);
});

it("should not display a title nor a description if props aren't set", () => {
  const component = shallow(<PageHelmet />);
  const titleSelector = component.find("title");
  const descriptionSelector = component.find('meta[name="description"]');
  expect(titleSelector.length).toBe(0);
  expect(descriptionSelector.length).toBe(0);
});

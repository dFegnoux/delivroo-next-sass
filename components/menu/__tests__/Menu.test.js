import React from "react";
import { shallow } from "enzyme";
import Menu from "../Menu";
import MenuCategory from "../MenuCategory";
import Cart from "../Cart";

const mandatoryProps = {
  updateCart: jest.fn(),
  cart: {}
};

it("should handle props without categories", () => {
  // Given
  const container = shallow(<Menu {...mandatoryProps} />);

  // Then
  expect(container.find(".menuLayout").length).toBe(1);
  expect(container.find(".menuContentWrapper").length).toBe(1);
  expect(container.find(MenuCategory).length).toBe(0);
  expect(container.find(Cart).length).toBe(1);
});

it("should handle fulfilled props", () => {
  // Given
  const categories = [["category1", []], ["category2", []]];
  const container = shallow(
    <Menu {...mandatoryProps} categories={categories} />
  );

  // Then
  expect(container.find(".menuLayout").length).toBe(1);
  expect(container.find(".menuContentWrapper").length).toBe(1);
  expect(container.find(MenuCategory).length).toBe(2);
  expect(container.find(Cart).length).toBe(1);
});

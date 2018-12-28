import MenuCategory from "../MenuCategory";
import { shallow } from "enzyme";
import MenuCard from "../MenuCard";

const mandatoryProps = {
  title: "Some Title",
  updateCart: jest.fn()
};

it("Should handle when there is no menus", () => {
  // Given
  const container = shallow(<MenuCategory {...mandatoryProps} />);

  // Then
  expect(container.find(".menuCategory").length).toBe(1);
  expect(container.find(".title").text()).toBe(mandatoryProps.title);
  expect(container.find(".itemsList").length).toBe(0);
});

it("Should display as many menus as props", () => {
  // Given
  const menus = [{ id: "1" }, { id: "2" }];
  const container = shallow(<MenuCategory {...mandatoryProps} menus={menus} />);

  // Then
  expect(container.find(".menuCategory").length).toBe(1);
  expect(container.find(".title").text()).toBe(mandatoryProps.title);
  expect(container.find(".itemsList").length).toBe(1);
  expect(container.find(MenuCard).length).toBe(2);
});

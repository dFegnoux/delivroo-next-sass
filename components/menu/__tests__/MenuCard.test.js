import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import MenuCard from "../MenuCard";

const props = {
  item: {
    id: "mocked id",
    title: "mocked title",
    description: "mocked description",
    picture: "mocked picture",
    price: "mocked price",
    popular: true
  },
  updateCart: jest.fn()
};
const container = shallow(<MenuCard {...props} />);

describe("MenuCard snapshots", () => {
  it("should render correctly with default props", () => {
    const tree = renderer.create(<MenuCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correclty differents values of popular attribute", () => {
    const notPopular = renderer
      .create(<MenuCard {...props} item={{ ...props.item, popular: false }} />)
      .toJSON();
    expect(notPopular).toMatchSnapshot();

    const popular = renderer.create(<MenuCard {...props} />).toJSON();
    expect(popular).toMatchSnapshot();
  });

  it("should render correclty if item has picture or not", () => {
    const noPicture = renderer
      .create(<MenuCard {...props} item={{ ...props.item, picture: null }} />)
      .toJSON();
    expect(noPicture).toMatchSnapshot();

    const picture = renderer.create(<MenuCard {...props} />).toJSON();
    expect(picture).toMatchSnapshot();
  });
});

it("should handle click correctly", () => {
  container.simulate("click");
  expect(props.updateCart).toHaveBeenCalledWith(props.item, "add");
});

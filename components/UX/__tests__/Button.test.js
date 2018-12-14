import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Button from "../Button";

describe("Buttons snapshots", () => {
  it("Should render a buttn when handleclick is setted", () => {
    const handleClick = jest.fn();
    const enabledBtn = renderer
      .create(
        <Button handleClick={handleClick} label="toto" className="delivroo" />
      )
      .toJSON();
    expect(enabledBtn).toMatchSnapshot();

    const disabledBtn = renderer
      .create(
        <Button
          handleClick={handleClick}
          label="toto"
          className="delivroo"
          disabled
        />
      )
      .toJSON();
    expect(disabledBtn).toMatchSnapshot();
  });

  it("Should render a Link when href is setted", () => {
    const enabledLink = renderer.create(<Button href="/" />).toJSON();
    expect(enabledLink).toMatchSnapshot();

    const disabledLink = renderer
      .create(<Button href="/" label="toto" className="delivroo" disabled />)
      .toJSON();
    expect(disabledLink).toMatchSnapshot();
  });
});

describe("Handle click button behavior", () => {
  const handleClick = jest.fn();
  const container = shallow(<Button handleClick={handleClick} />);

  it("Should render a <button> when handleclick is setted", () => {
    expect(container.find("button").length).toBe(1);
  });
  it("Should fired the handleClick function on click", () => {
    container.simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });
});

describe("Link button behavior", () => {
  it("Should render a Link when href is setted", () => {
    const container = shallow(<Button href="/" />);
    expect(container.find("button").length).toBe(1);
  });
});

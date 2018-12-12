import React from "react";
import renderer from "react-test-renderer";
import TextInput from "../TextInput";

const props = {
  className: "mockdeClassName",
  label: "mockedLabel",
  field: {
    name: "mockedFieldName"
  },
  form: {
    touched: {}
  }
};

describe("TextInput snapshots", () => {
  it("should render correctly with default props", () => {
    const tree = renderer.create(<TextInput {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle display of an error message", () => {
    const errorProps = {
      form: {
        errors: {
          [props.field.name]: "error"
        },
        touched: {
          [props.field.name]: true
        }
      }
    };
    const tree = renderer
      .create(<TextInput {...props} {...errorProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import PaymentForm from "../PaymentForm";

it("PaymentForm snapshots", () => {
  const snap = renderer.create(<PaymentForm />).toJSON();
  expect(snap).toMatchSnapshot();
});

it("should handle mandatory values", () => {
  const form = shallow(<PaymentForm />);
  const formInstance = form.instance();
  const emptyValues = { street_address: "", postcode: "", city: "", phone: "" };
  const requiredText = "Required";

  const response = formInstance.validate(emptyValues);
  expect(response).toEqual({
    street_address: requiredText,
    postcode: requiredText,
    city: requiredText,
    phone: requiredText
  });
});

it("should correct form", () => {
  const form = shallow(<PaymentForm />);
  const formInstance = form.instance();
  const emptyValues = {
    street_address: "Coucou",
    postcode: "Coucou",
    city: "Coucou",
    phone: "Coucou"
  };
  const requiredText = "Required";

  const response = formInstance.validate(emptyValues);
  expect(response).toEqual({});
});

it("Should alert results on submit", () => {
  const form = shallow(<PaymentForm />);
  const formInstance = form.instance();
  const otherInfos = {
    setSubmitting: jest.fn()
  };

  formInstance.submit({}, otherInfos);
  expect(otherInfos.setSubmitting).toHaveBeenCalledWith(false);
});

import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import DeliveryForm from "../DeliveryForm";

// it("Should alert results on submit", () => {
//   const form = shallow(<DeliveryForm />);
//   const formInstance = form.instance();
//   const otherInfos = {
//     setSubmitting: jest.fn()
//   };

//   formInstance.submit({}, otherInfos);
//   expect(otherInfos.setSubmitting).toHaveBeenCalledWith(false);
// });

it("DeliveryForm snapshots", () => {
  const snap = renderer.create(<DeliveryForm />).toJSON();
  expect(snap).toMatchSnapshot();
});

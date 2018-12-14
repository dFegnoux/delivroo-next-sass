import React, { Component } from "react";
import { Formik, Field } from "formik";
import deliveryFormFields from "./paymentFormFields";
import TextInput from "./TextInput";
import "./deliveryForm.scss";
import Button from "../UX/Button";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  flat: Yup.string(),
  code: Yup.string(),
  street_address: Yup.string().required("Required"),
  postcode: Yup.number()
    .min("5 caractères minimum")
    .required("Required"),
  city: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  instructions: Yup.string()
});

class PaymentForm extends Component {
  state = {
    formFields: []
  };

  componentDidMount() {
    // fetch(
    //   "https://lereacteurapp.s3.amazonaws.com/react/deliveroo/deliveroo-shipping-form.json",
    //   {
    //     mode: "no-cors"
    //   }
    // ).then(response => {
    //   console.log(response);
    // });

    this.setState(() => ({
      formFields: deliveryFormFields.map(field => ({
        ...field,
        initialValue: ""
      }))
    }));
  }

  submit = (values, { setSubmitting, isValid }) => {
    if (!isValid) {
      alert("Why did you try to do that ?!");
      return;
    }

    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  render() {
    const { formFields } = this.state;
    let initialValues = {};
    formFields.forEach(field => {
      initialValues[field.name] = field.initialValue;
    });

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={this.submit}
        validateOnChange
        isInitialValid={false}
      >
        {({ isSubmitting, handleSubmit, isValid }) => {
          return (
            <form onSubmit={handleSubmit} className="paymentForm">
              {formFields.map(field => (
                <Field
                  key={field.name}
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  className={field.col}
                  label={field.title}
                  component={TextInput}
                />
              ))}
              <Button
                type="submit"
                label="Valider"
                disabled={isSubmitting || !isValid}
              />
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default PaymentForm;

import React, { Component } from "react";
import { Formik, Field } from "formik";
import paymentFormFields from "./paymentFormFields";
import TextInput from "./TextInput";
import "./paymentForm.scss";
import Button from "../UX/Button";

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
      formFields: paymentFormFields.map(field => ({
        ...field,
        initialValue: ""
      }))
    }));
  }

  validate = values => {
    const required = ["street_address", "postcode", "city", "phone"];
    let errors = {};

    Object.keys(values).forEach(key => {
      if (!values[key] && required.includes(key)) {
        errors[key] = "Required";
      }
    });

    return errors;
  };

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
        validate={this.validate}
        onSubmit={this.submit}
        validateOnChange
        isInitialValid={false}
      >
        {({ isSubmitting, handleSubmit, isValid }) => {
          console.log(isSubmitting, !isValid, isSubmitting || !isValid);
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
                  validateOnChange
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

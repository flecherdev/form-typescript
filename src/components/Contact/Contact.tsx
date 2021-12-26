import React from 'react';
import InputForm  from "./components/InputForm/InputForm";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

import InputFormik from './ContactStyle';

interface MyFormValues {
  firstName: string;
}

export const Contact= () => {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <InputFormik />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};


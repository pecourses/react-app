import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signInScheme } from '../../../utils/validationScheams';

const SignInForm = (props) => {
  const initialValues = {
    login: '',
    email: '',
    password: '',
    test: '',
  };

  const submitHandler = (values, formikBag) => {
    console.log(values);
    console.log('BAG=>', formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={initialValues}
      validationSchema={signInScheme}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form>
            <Field name='login' type='text' placeholder='enter your login' />
            <ErrorMessage name='login' component='span' />

            <Field name='email' type='text' placeholder='email' />
            <ErrorMessage name='email' component='span' />

            <Field name='password' type='password' placeholder='password' />
            <ErrorMessage name='password' component='span' />

            <Field>
              {(fieldProps) => {
                console.log(fieldProps);
                return null;
              }}
            </Field>

            <input type='submit' />
          </Form>
        );
      }}
    </Formik>
  );
};

SignInForm.propTypes = {
//   submitHandler: PropTypes.func.isRequired,
};

/* export default withFormik({
  onSubmit: submitHandler,
  initialValues: initialValues,
  validationSchema: signInScheme,
})(SignInForm); */
export default SignInForm
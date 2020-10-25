import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SignInFormik.module.css';

const validationScheme = Yup.object({
  login: Yup.string().trim().min(8).max(32).required('This is required field'),
  password: Yup.string()
    // gr3at@3wdsG
    .trim()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
    )
    .required('This is required field'),
});

const SignInFormik = (props) => {
  const initialValues = {
    login: '',
    password: '',
  };

  const submitHandler = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={initialValues}
      validationSchema={validationScheme}
    >
      {(formikProps) => {
        return (
          <Form className={styles.mainForm}>
            <label htmlFor="">
              {' '}
              Login
              <Field
                className={styles.inputField}
                name="login"
                type="text"
                placeholder="Login"
              />{' '}
            </label>
            <ErrorMessage
              className={styles.errorMessage}
              name="login"
              component="span"
            />
            <label htmlFor="">
              {' '}
              Password
              <Field
                className={styles.inputField}
                name="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <ErrorMessage
              className={styles.errorMessage}
              name="password"
              component="span"
            />
            <input className={styles.signInButton} type="submit" />
          </Form>
        );
      }}
    </Formik>
  );
};
SignInFormik.propTypes = {};

export default SignInFormik;

import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signInScheme } from '../../../utils/validationScheams';
import CustomInput from '../CustomInput';
import styles from './SignInFormik.module.css';
import cx from 'classnames';

const SignInForm = (props) => {
  const initialValues = {
    login: '',
    email: '',
    password: '',
  };

  const submitHandler = (values, formikBag) => {
    console.log(values);
    console.log('BAG=>', formikBag);
    formikBag.resetForm();
  };

  const formClasses = cx(styles.container, styles.formLayout)

  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={initialValues}
      validationSchema={signInScheme}
    >
      <Form className={formClasses}>
        <p className={styles.fieldHeader}>Enter your login</p>
        <CustomInput name='login' placeholder='enter your login' />
        <p className={styles.fieldHeader}>Enter your email</p>
        <CustomInput name='email' placeholder='email' />
        <p className={styles.fieldHeader}>Enter your password</p>
        <CustomInput name='password' type='password' placeholder='password' />
        <button type='submit' className={styles.submitBtn}>Sign In</button>
      </Form>
    </Formik>
  );
};

SignInForm.propTypes = {
  //submitHandler: PropTypes.func.isRequired,
};

export default SignInForm;

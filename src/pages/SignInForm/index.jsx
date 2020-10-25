import React from 'react';
import styles from './SignInFormPage.module.css';
import SignInForm from '../../components/forms/SignInFormik';

const SignInPage = (props) => {
  return (
    <div className={styles.pageContainer}>
      <img src='src' />
      <p>Sign in To giuhub</p>
      <SignInForm />
      <p>
        New to github? <a href='/signup'>Create an acoount</a>
      </p>
    </div>
  );
};

export default SignInPage;

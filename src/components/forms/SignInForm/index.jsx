import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SignInForm.module.css';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
    login: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target);
  };

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    void this.setState({
      [name]: value,
    });
  };

  validateSubmit = (values) => {
    const errors = {};
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="login"
          value={login}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

SignInForm.propTypes = {};

export default SignInForm;

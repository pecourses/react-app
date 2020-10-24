import React, { Component } from 'react';
import './App.css';
// import SignInForm from './components/forms/SignInForm';
import SignInFormik from './components/forms/SignInFormik';

class App extends Component {
  render() {
    return (
      <>
        <SignInFormik />
      </>
    );
  }
}

export default App;

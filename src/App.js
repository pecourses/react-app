import React, { Component } from 'react';
import { loadPosts, loadUsers } from './api';
import './App.css';
import UserList from './components/UserList';
import TestComponent from './components/Test';
import DataLoader from './components/DataLoader';
import SignInForm from './components/forms/SignInForm';
import SignInFormik from './components/forms/SignInFormik';

class App extends Component {
  render() {
    return <SignInFormik />;
  }
}

export default App;

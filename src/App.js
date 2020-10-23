import React, { Component } from 'react';
import { loadPosts, loadUsers } from './api';
import './App.css';
import UserList from './components/UserList';
import TestComponent from './components/Test';
import DataLoader from './components/DataLoader';

class App extends Component {
  render() {
    return (
      <>
        <TestComponent />
      </>
    );
  }
}

export default App;

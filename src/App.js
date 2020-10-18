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
        {/* <DataLoader getData={loadPosts} render={} /> */}
        <DataLoader
          getData={loadUsers}
          render={
            (users) => {
            return <div>{JSON.stringify(users)}</div>;
          }
        }
        />
      </>
    );
    // const test = React.createElement(TestComponent, {}, 'etestet', 'testse');
    // console.log(test);
    // return test
  }
}

export default App;

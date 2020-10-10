import React, { Component } from 'react';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Greeting name='Vasya' />
        <Counter title='Counter title' />
      </>
    );
  }
}

export default App;

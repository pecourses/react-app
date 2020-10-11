import React, { Component } from 'react';
import CounterDashboard from './components/CounterDashboard';
import Greeting from './components/Greeting';
import './App.css';

class App extends Component {
  computeVisibility = () => {
    return true;
  };

  render() {
    return <CounterDashboard />;
  }
}

export default App;

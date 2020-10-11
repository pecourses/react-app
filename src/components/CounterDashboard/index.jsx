import React, { Component } from 'react';
import Counter from './Counter';
class CounterDashboard extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default CounterDashboard;

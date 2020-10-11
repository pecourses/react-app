import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';

class Counter extends Component {
  render() {
    const { value, incerement, decrement } = this.props;
    return (
      <div>
        <CounterDisplay value={value} />
        <CounterControls {...this.props} />
      </div>
    );
  }
}

export default Counter;

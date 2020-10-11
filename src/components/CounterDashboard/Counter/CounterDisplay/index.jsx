import React, { Component } from 'react';

class CounterDisplay extends Component {
  render() {
    return <div>{this.props.value}</div>;
  }
}

export default CounterDisplay;

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  incerement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return <div onClick={this.incerement}>{this.state.value}</div>;
  }
}

export default Counter;

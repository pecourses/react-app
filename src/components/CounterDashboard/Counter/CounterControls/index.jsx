import React, { Component } from 'react';

class CounterControls extends Component {
  handleClickIncr = () => {
    this.props.incerement();
  };
  handleClickDecr = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickDecr}>-</button>
        <button onClick={this.handleClickIncr}>+</button>
      </div>
    );
  }
}

export default CounterControls;

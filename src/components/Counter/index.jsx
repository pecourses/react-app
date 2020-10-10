import React, { Component } from 'react';
import styles from './Counter.module.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      step: 1,
    };
  }

  increment = () => {
    const { value, step } = this.state;
    this.setState({
      value: value + step,
    });
  };

  decreament = () => {
    const { value, step } = this.state;
    if (value > 0) {
      this.setState({
        value: value - step,
      });
    }
  };

  render() {
    const { value } = this.state;
    const { title } = this.props;

    return (
      <div title={title} className={styles.container}>
        <p>{value}</p>
        <button onClick={this.decreament}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;

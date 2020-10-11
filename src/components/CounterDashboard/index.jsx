import React, { Component } from 'react';
import Counter from './Counter';
class CounterDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isGoing: true,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    this.clearTimer();
    if (this.state.isGoing) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  reset = () => {
    this.setState({
      value: 0,
    });
  };

  clearTimer = () => {
    clearInterval(this.timeoutId);
  };

  stopTimer = () => {
    this.setState({
      isGoing: !this.state.isGoing,
    });
  };

  startTimer = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        value: this.state.value + 1,
      });
    }, 1000);
  };

  incerement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  decrement = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Counter
          decrement={this.decrement}
          incerement={this.incerement}
          value={value}
        />
        <button onClick={this.stopTimer}>Switch stop/going</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CounterDashboard;

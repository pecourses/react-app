import React, { Component } from 'react';
import Counter from './Counter';
class CounterDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        value: this.state.value + 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

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
      </div>
    );
  }
}

export default CounterDashboard;

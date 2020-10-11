import React, { Component } from 'react';
import CounterDashboard from './components/CounterDashboard';
import Greeting from './components/Greeting';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  clickHandler = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    return (
      <div>
        {this.state.isShow && <CounterDashboard />}
        <button onClick={this.clickHandler}>UNMOUNT COUNTER</button>
      </div>
    );
  }
}

export default App;

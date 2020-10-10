import React, { Component } from 'react';
import _ from 'lodash';
import styles from './Greeting.module.css';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreetingShown: true,
      isGreeting: true,
      test: {
        abrakadabra: 'abrakadabra',
        
      },
    };
  }

  handleSwitchVisibility = () => {
    this.setState({
      isGreetingShown: !this.state.isGreetingShown,
    });
  };

  handleSwitchGreeting = () => {
    const stateCopy = _.cloneDeep(this.state);
    const newState = _.merge(stateCopy, { isGreeting: !this.state.isGreeting });

    this.setState(newState);
  };

  render() {
    const { name } = this.props;
    const { isGreetingShown, isGreeting } = this.state;
    return (
      <div className={styles.container}>
        {isGreetingShown && (
          <span>
            {isGreeting ? 'Hi' : 'Bye'}, {name}
          </span>
        )}
        <button onClick={this.handleSwitchVisibility}>Switch visibility</button>
        <button onClick={this.handleSwitchGreeting}>Switch greeting</button>
      </div>
    );
  }
}

export default Greeting;

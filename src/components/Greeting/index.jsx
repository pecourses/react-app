import React, { Component } from 'react';
import _ from 'lodash';
import GreetingControls from './GreetingControls';
import styles from './Greeting.module.css';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Vasya',
      isGreetingShown: true,
      isGreeting: true,
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
    console.log(this.props);

    const { isShown } = this.props;
    const { isGreetingShown, isGreeting, name } = this.state;
    return (
      <div className={styles.container}>
        {isGreetingShown && (
          <span>
            {isGreeting ? 'Hi' : 'Bye'} {isShown && `, ${name}`}
          </span>
        )}
        <GreetingControls
          titleForButtons={name}
          handleSwitchGreeting={this.handleSwitchGreeting}
          handleSwitchVisibility={this.handleSwitchVisibility}
        />
      </div>
    );
  }
}

export default Greeting;

import React, { Component } from 'react';

class GreetingControls extends Component {
  handleClickVisibility = () => {
    const { handleSwitchVisibility } = this.props;
    handleSwitchVisibility();
  };

  handleClickGreeting = () => {
    const { handleSwitchGreeting } = this.props;
    handleSwitchGreeting();
  };

  render() {
    const { titleForButtons } = this.props;
    return (
      <div>
        <button title={titleForButtons} 
        onClick={this.handleClickVisibility}>
          Switch visibility
        </button>
        <button
          title={titleForButtons}
          className={'test'}
          onClick={this.handleClickGreeting}
        >
          Switch greeting
        </button>
      </div>
    );
  }
}

export default GreetingControls;

import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ImportantContext';

function withTheme(WrappedComponent) {
  return class extends Component {
    state = {
      isLightTheme: true,
    };

    changeTheme = () => {
      this.setState({
        isLightTheme: !this.state.isLightTheme,
      });
    };

    render() {
      const context = {
        isLightTheme: this.state.isLightTheme,
        changeTheme: this.changeTheme,
      };

      return (
        <ThemeContext.Provider value={context}>
          <WrappedComponent />
        </ThemeContext.Provider>
      );
    }
  };
}

export default withTheme;

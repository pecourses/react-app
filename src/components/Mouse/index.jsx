import React, { Component } from 'react';

class Mouse extends Component {
  state = {
    x: 0,
    y: 0,
  };

  handleMove = ({ clientX: x, clientY: y }) => {
    this.setState({ x, y });
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove);
  }

  render() {
    const { children } = this.props;

    return children(this.state);
  }
}

export default Mouse;

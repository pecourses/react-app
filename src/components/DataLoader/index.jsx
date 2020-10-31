import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataLoader extends Component {
  state = {
    data: [],
    error: null,
    isFetching: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { getData } = this.props;

    this.setState({
      isFetching: true,
    });
    try {
      const data = await getData();
      this.setState({
        data,
        isFetching: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        error,
        isFetching: false,
      });
    }
  };

  render() {
    const { children } = this.props;
    return children(this.state.data);
  }
}

DataLoader.propTypes = {
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default DataLoader;

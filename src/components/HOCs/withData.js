import React, { Component } from 'react';

function withData(props) {
  return function (WrappedComponent) {
    return class extends Component {
      state = {
        data: [],
        error: null,
        isFetching: false,
      };

      componentDidMount() {
        this.fetchData();
      }

      fetchData = async () => {
        this.setState({
          isFetching: true,
        });
        try {
          const data = await props.getData();
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
        return <WrappedComponent 
            data={this.state.data} />;
      }
    };
  };
}

export default withData;

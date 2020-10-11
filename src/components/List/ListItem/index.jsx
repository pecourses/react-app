import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  handleDelete = () => {
    this.props.filterItems(this.props.name);
  };

  handleSelect = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };

  render() {
    const { name } = this.props;
    const { isSelected } = this.state;
    const styles = {
      backgroundColor: isSelected ? 'red' : 'white',
    };
    return (
      <li style={styles}>
        {name}
        <button onClick={this.handleSelect}>select</button>
        <button onClick={this.handleDelete}>delete</button>
      </li>
    );
  }
}

export default ListItem;

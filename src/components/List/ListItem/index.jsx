import React, { Component } from 'react';
import Icon from '@mdi/react'
import { mdiAccount, mdiAccountAlert, mdiAccountArrowLeft, mdiAccountBox, mdiFullscreenExit } from '@mdi/js'
import styles from './ListItem.module.css';

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
    const inlineStyles = {
      backgroundColor: isSelected ? 'red' : 'transparent',
    };
    return (
      <li style={inlineStyles} className={styles.wrapper}>
        {name}
        <Icon path={mdiAccountBox} size={2} />
        <button onClick={this.handleSelect}>select</button>
        <button onClick={this.handleDelete}>delete</button>
      </li>
    );
  }
}

export default ListItem;

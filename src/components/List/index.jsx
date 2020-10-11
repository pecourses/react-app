import React, { Component } from 'react';
import ListItem from './ListItem';

const db =[
    {
        id:1,
        name: 'iphone',
        price:10000
    },{}
]

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['iPhone', 'Xiaomi', 'Samsung', 'Oppo', 'Nokia', 'Panasonic', 'LG'],
    };
  }

  filterItems = (filteredItem) => {
    this.setState({
      list: this.state.list.filter(
        (currentItem) => currentItem !== filteredItem
      ),
    });
  };

  renderListItems = () => {
    const { list } = this.state;
    return list.map((item) => (
      <ListItem key={item} filterItems={this.filterItems} name={item} />
    ));
  };

  render() {
    return <ul>{this.renderListItems()}</ul>;
  }
}

export default List;

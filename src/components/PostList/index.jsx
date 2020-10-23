import React, { Component } from 'react';
import { loadPosts } from '../../api';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPosts:[],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    this.setState({
      isFetching: true,
    });
    try {
      const posts = await loadPosts();
      this.setState({
        posts: posts,
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
    return <div></div>;
  }
}

export default PostList;

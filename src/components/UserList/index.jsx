import React, { Component } from 'react';
import _ from 'lodash';
import UserCard from './UserCard';
import FormSubmitter from '../FormSubmitter';
import withData from '../HOCs/withData';
import styles from './UserList.module.css';
import { loadUsers } from '../../api';
import SelectedUserList from './SelectedUserList';
import { toggleItemInArray } from '../../utils';
import CONSTANTS from '../../CONSTANTS';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUsers: [],
      isFetching: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.fetchUsers();

    /*  
   
   TODO: find event on unload

   document.addEventListener('beforeunload',()=>{
      localStorage.setItem(
        CONSTANTS.SELECTED_USERS_KEY,
        JSON.stringify(this.state.selectedUsers)
      );
    } )*/

    const parsedUsers = JSON.parse(
      localStorage.getItem(CONSTANTS.SELECTED_USERS_KEY)
    );
    console.log(parsedUsers);
    this.setState({
      selectedUsers: parsedUsers || [],
    });
  }

  fetchUsers = async (page = 1) => {
    this.setState({
      isFetching: true,
    });
    try {
      const users = await loadUsers(10, page);
      this.setState({
        users: users.results,
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

  handleSelect = (newUser) => {
    const { selectedUsers } = this.state;

    const foundUser = _.find(selectedUsers, newUser);

    this.setState({
      selectedUsers: toggleItemInArray(selectedUsers, foundUser || newUser),
    });
  };

  renderUsers = () => {
    const { users, selectedUsers } = this.state;

    const userListStyles = {
      container: styles.userCardMargin,
    };

    return users.map((user) => (
      <UserCard
        key={user.login.uuid}
        isSelected={Boolean(
          selectedUsers.find(
            (currentUser) => currentUser.login.uuid === user.login.uuid
          )
        )}
        handleSelect={this.handleSelect}
        user={user}
      />
    ));
  };

  renderPaginaton = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((btnNum) => (
      <button key={btnNum} onClick={() => this.fetchUsers(btnNum)}>
        {btnNum}
      </button>
    ));
  };

  renderSaveSelectedUsersButton = () => {
    return (
      <FormSubmitter>
        {(onSubmit) => (
          <button onClick={() => onSubmit(this.state.selectedUsers)}>
            Save Selected users
          </button>
        )}
      </FormSubmitter>
    );
  };

  renderSaveUsersButton = () => {
    return (
      <FormSubmitter>
        {(onSubmit) => (
          <button
            onClick={(event) => {
              console.log(event);
              onSubmit(this.state.users);
            }}
          >
            Save users
          </button>
        )}
      </FormSubmitter>
    );
  };

  render() {
    const { isFetching, error, selectedUsers } = this.state;

    console.log(this.props.data)

    return (
      <div>
        {this.renderPaginaton()}
        {this.renderSaveSelectedUsersButton()}
        {this.renderSaveUsersButton()}
        <div className={styles.listContainer}>
          <section className={styles.userList}>
            <h1>User List</h1>
            {error && <Error error={error} />}
            {isFetching ? <Spinner /> : this.renderUsers()}
          </section>
          <section className={styles.userList}>
            <h1>Selected Users List</h1>
            <SelectedUserList
              handleSelect={this.handleSelect}
              users={selectedUsers}
            />
          </section>
        </div>
      </div>
    );
  }
}

function Error(props) {
  return <div>error</div>;
}

function Spinner(props) {
  return <div>LOADING...</div>;
}

const result = withData(UserList);

export default result;

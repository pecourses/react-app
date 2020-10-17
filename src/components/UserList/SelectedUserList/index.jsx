import React from 'react';
import UserCard from '../UserCard';

const SelectedUserList = props => {
  const { users, handleSelect } = props;

  return users.map(user => (
    <UserCard user={user} key={user.login.uuid} handleSelect={handleSelect} />
  ));
};

export default SelectedUserList;

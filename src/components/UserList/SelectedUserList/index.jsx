import React from 'react';
import UserCard from '../UserCard';

const SelectedUserList = (props) => {
  const { users, handleSelect } = props;

  return users.map(
    (user) =>
      user.isSelected && (
        <UserCard key={user.login.uuid} handleSelect={handleSelect} {...user} />
      )
  );
};

export default SelectedUserList;

import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './UserCard.module.css';

function UserCard(props) {
  const handleClick = () => {
    const { handleSelect, login:{uuid} } = props;
    console.log(uuid)
    handleSelect(uuid);
  };

  const {
    name,
    email,
    isSelected,
    picture: { medium: imgSrc },
  } = props;

  const cardStyles = classNames(
      styles.userCard,
    {
    [styles.selectedUserCard]: isSelected,
  });

  return (
    <article onClick={handleClick} 
    className={cardStyles}>
      <h1>
        <span>{name.title}</span>
        {name.first} {name.last}
      </h1>
      <img src={imgSrc} alt='user' />
      <p>{email}</p>
    </article>
  );
}

export default UserCard;

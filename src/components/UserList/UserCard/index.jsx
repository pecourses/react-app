import React from 'react';
import classNames from 'classnames';
import styles from './UserCard.module.css';

function UserCard(props) {
  const handleClick = () => {
    const { handleSelect, user } = props;
    handleSelect(user);
  };

  const {
    isSelected,
    user: {
      name,
      email,
      picture: { medium: imgSrc },
    },
  } = props;

  const cardStyles = classNames(styles.userCard, {
    [styles.selectedUserCard]: isSelected,
  });

  return (
    <article onClick={handleClick} className={cardStyles}>
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

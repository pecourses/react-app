import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './UserCard.module.css';

function UserCard(props) {
  const handleClick = () => {
    const { handleSelect, user } = props;
    handleSelect(user);
  };

  const {
    // classes:{container},
    isSelected,
    user: {
      name,
      email,
      picture: { medium: imgSrc },
    },
  } = props;

  const cardStyles = classNames(
    styles.userCard,
    /* container */ {
      [styles.selectedUserCard]: isSelected,
    }
  );

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

const userCardNameProp = PropTypes.shape({
  title: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
}).isRequired;

const userCardPictureProp = PropTypes.shape({
  medium: PropTypes.string.isRequired,
}).isRequired;

UserCard.propTypes = {
  user: PropTypes.shape({
    name: userCardNameProp,
    email: PropTypes.string.isRequired,
    picture: userCardPictureProp,
  }),
  isSelected: PropTypes.bool,
};

export default UserCard;

import React from 'react';
import PropTypes from 'prop-types';
import friends from './friends.json';
import defaultAvatar from '../Profile/avatar.png';
import styles from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendsListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
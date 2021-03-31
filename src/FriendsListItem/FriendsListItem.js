import React from 'react';
import PropTypes from 'prop-types';
import friends from './friends.json';
import defaultAvatar from '../Profile/avatar.png';

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    <span className="status"></span>
    <img className="avatar" src={avatar} alt="avatar" width="48" />
    <p className="name">{name}</p>
    {isOnline ? (<p>Online</p>) : (<p>Offline</p>)}
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
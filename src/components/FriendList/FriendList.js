import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;

// avatar - ссылка на аватар
// name - имя друга
// isOnline

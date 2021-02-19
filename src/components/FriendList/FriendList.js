import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
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

// Так  можно прописать тип для итерируемого масива обьектов
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;

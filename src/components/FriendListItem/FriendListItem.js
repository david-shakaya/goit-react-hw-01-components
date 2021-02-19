import React from 'react';
import style from './FriendListItem.module.css';

// FriendListItem avatar={avatar} name={name} isOnline={isOnline} />;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.Item}>
      {isOnline ? (
        <span className={style.Online}></span>
      ) : (
        <span className={style.Ofline}> </span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={style.Text__item}>{name}</p>
    </li>
  );
};

export default FriendListItem;

import React from 'react';
import s from './../Friends.module.css'

const FriendItem = (props) => {
    return <div className={s.friendItem}>{props.name}</div>
}

export default FriendItem;
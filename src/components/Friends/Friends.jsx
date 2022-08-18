import React from 'react';
import s from './Friends.module.css'
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {
    // let state = props.state.friends;

    let friendsElements = 
    props.friends.map(f => <FriendItem name={f.name} key={f.id} />);
    
    return (
        <div className={s.item}>
            <div className={s.circle}></div>
            <div className={s.circle}></div>
            <div className={s.circle}></div>
            <div>
                {friendsElements}
            </div>
        </div>

    )
}

export default Friends;

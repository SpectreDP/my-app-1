import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispachProps = () => {
    return {

    }
}
const FriendsContainer = connect(mapStateToProps, mapDispachProps)(Friends);

export default FriendsContainer;

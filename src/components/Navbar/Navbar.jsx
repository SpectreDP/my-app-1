import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import FriendsContainer from '../Friends/FriendsContainer';

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className={setActiveLink}>Progile</NavLink>
      </div>
      <div className={`${s.item} ${s.link}`}>
        <NavLink to='/dialogs' className={setActiveLink}>Messages</NavLink>
      </div>
      <div className={`${s.item} ${s.link}`}>
        <NavLink to='/users' className={setActiveLink}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={isLinkActive()}>News</NavLink>
      </div>
      <div className={`${s.item} ${s.link}`}>
        <NavLink to='/music' className={isLinkActive()}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className={isLinkActive()}>Settings</NavLink>
      </div>
      <div className={`${s.item} ${s.friendsItem}`}>
        <NavLink to='/friends' className={isLinkActive()}>Friends</NavLink>
      </div>
      <div>
        <FriendsContainer />
      </div>
    </nav>
  )
}
const setActiveLink = ({ isActive }) => isActive ? s.active : s.item
const isLinkActive = () => navData => navData.isActive ? s.active : s.item
// Все эти (три) функции работают одинаково. navData откуда?

// const isLinkActive = () => {
//   return (
//     navData => navData.isActive ? s.active:s.item
//   )
//  } 

export default Navbar;
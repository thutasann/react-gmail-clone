import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';



function Header() {

    const history = useHistory();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signout = () =>{
        auth.signOut().then(() =>{
            dispatch(logout());
        });
    };


    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img onClick={() => history.push("/")} src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png" alt="" />
            </div>
            <div className='header__middle'>
                <SearchIcon />
                <input placeholder="Search..." type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className='header__right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src={user?.photoUrl} onClick={signout} className="avatar" />
            </div>
        </div>
    )
}

export default Header;

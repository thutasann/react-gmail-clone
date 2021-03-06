import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    document.title = "Gmail Clone | Login";

    const dispatch = useDispatch();


    const signin = () =>{
        auth.signInWithPopup(provider)
        .then(({ user }) =>{
            dispatch(login({
                displayName : user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }));
        })
        .catch((error) =>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png" alt="logo" />
                <Button variant="contained" color="primary" onClick={signin}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login;

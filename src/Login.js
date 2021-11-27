import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase"
import React from 'react'
import "./Login.css";

function Login() {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch((err) => alert(err.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src = "https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.jpg" 

                    alt="discord-logo"
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

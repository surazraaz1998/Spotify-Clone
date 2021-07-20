import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'
function Login() {
    return (
        <div className="login">
            {/* Spotify Logo */}
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotify Logo"/>
            {/* Login with Spotify button*/}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login

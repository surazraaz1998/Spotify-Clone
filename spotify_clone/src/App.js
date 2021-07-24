import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login"
import Player from "./Player"
import { getTokenFromResponseUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';

const Spotify=new SpotifyWebApi();

function App() {
  const [{user, token},dispatch]=useDataLayerValue();
  useEffect(() => {
    const hash =getTokenFromResponseUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){

      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })
      Spotify.setAccessToken(_token);
      Spotify.getMe().then(user =>{
        dispatch({
          type:'SET_USER',
          user:user,
        })
      })
    }
    
  }, [])
  return (
    <div className="app">
      {
        token ? (<Player Spotify={Spotify}/>):(<Login/>)
      }
    </div>
  );
}

export default App;

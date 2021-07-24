import React from 'react';
import Body from './Body';
import "./Player.css";
import Sidebar from './Sidebar';
import Footer from "./Footer";
function Player() {
    return (
        <div className="player">
            <div className="player_body">
                {/*Sidebar*/ }
                <Sidebar/>
                 {/*Body*/ }
                 <Body/>
            </div>
           {/*Footer*/}
           <Footer/>
        </div>
    )
}

export default Player

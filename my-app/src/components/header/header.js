import React from "react";

import '../header/header.css';
import cameraIcon from '../../img/camera.svg';
import searchIcon from '../../img/search.svg';
import menuIcon from '../../img/menudots.svg';
import SecondaryHeader from "../SecondaryHeader/secondaryHeader";
import Contacts from "../Chats/contacts";


function Header()
{
    return(
        <div className="header-main">
            <div className="header-container">
                <div className="title-name">
                    <div className="title">
                        Whatsapp
                    </div>
                </div>
                <div className="action-icon-container">
                    <div className="icon">
                        <img src={cameraIcon} alt="camera-icon"></img>                     
                    </div>
                    <div className="icon">
                    <img src={searchIcon} alt="search-icon"></img>  
                    </div>
                    <div className="icon">
                    <img src= {menuIcon} alt="menu-icon"></img> 
                    </div>

                </div>
               
            </div>
            <Contacts/>  

            
        </div>                   

    );
}

export default Header;
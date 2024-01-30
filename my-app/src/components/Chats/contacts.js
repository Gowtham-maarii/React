import React from "react";

import '../Chats/contacts.css';
import dP from '../../img/VARUN TEJ.jpg';

function Contacts()
{
    return(
        <div className="Chats">
            <div class="message-container">
                <div class="avatar-holder">
                    <div class="avatar">
                        <img src={dP} alt="profile-picture"> </img>
                    </div>
                </div>
                <div class="message-info-holder">
                    <div class="msg-info">
                        <div class="name">
                            <span>Kiran</span>
                        </div>
                        <div class="last-msg">
                        <span> Where are you man?</span>
                        </div>
                    </div>
                    <div class="extra-info-holder active">
                        <div class="time">
                            <span>12:30pm</span>
                        </div>
                        <div class="bubble">
                            <spam>5</spam>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );

}
export default Contacts;


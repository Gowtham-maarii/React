import React from 'react';

import '../../components/SecondaryHeader/secondaryHeader.css';
import groupIcon from '../../img/group.svg';

function SecondaryHeader()
{
    return(
        <div className='secondary-header'>
            <div className='menu-items'>
                <div className='group-icon'>
                    <img src={groupIcon} alt='groupicon'> </img>
                </div>
                <div className='chats'>
                    <span>Chats</span>
                </div>
                <div className='status'>
                    <span>Status</span>
                </div>
                <div className='calls'>
                    <span>Calls</span>   
                </div>

            </div>
        </div>
    );
}

export default SecondaryHeader;
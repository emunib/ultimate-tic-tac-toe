import {faO, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.scss';

function Box({turn, onBoxClick}) {
    return (
        <div className={'box'} onClick={onBoxClick}>
            {turn === 'x' && <FontAwesomeIcon className={'box__x-icon'} icon={faXmark}/>}
            {turn === 'o' && <FontAwesomeIcon className={'box__o-icon'} icon={faO}/>}
        </div>
    );
}

export default Box;
import React from 'react';
import Mark from '../Mark';
import './style.scss';

function Box({turn, onBoxClick}) {

    return (
        <div className={'box'} onClick={onBoxClick}>
            <Mark turn={turn}/>
        </div>
    );
}

export default Box;
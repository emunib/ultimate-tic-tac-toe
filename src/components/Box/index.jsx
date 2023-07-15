import React from 'react';
import Mark from '../Mark';
import './style.scss';

function Box({turn, onBoxClick}) {

    return (
        <div className={'box'} onClick={onBoxClick}>
            <Mark turn={turn} baseClass={'box__icon'}/>
        </div>
    );
}

export default Box;
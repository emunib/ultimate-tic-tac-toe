import React from 'react';
import './style.scss';

function Box({value, onBoxClick}) {
    return (
        <div className={'box'} onClick={onBoxClick}>{value}</div>
    );
}

export default Box;
import {faO, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import Box from '../Box';
import './style.scss';

function Board({isOpen, turn, winner, checkWinner, makeMove}) {
    const [values, setValues] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (!isOpen || winner || values[i]) return;

        const nextValues = [...values];
        nextValues[i] = turn;

        setValues(nextValues);
        checkWinner(nextValues);
        makeMove(i);
    }

    return (
        <div className={'board-wrapper'}>
            <div className={`board ${isOpen ? '' : 'board--closed'} ${winner ? `board--won-${winner}` : ''}`}>
                {values.map((turn, i) => <Box key={i} turn={turn} onBoxClick={() => handleClick(i)}/>)}
            </div>
            {winner === 'x' && <FontAwesomeIcon className={'board__icon board__icon--x'} icon={faXmark}/>}
            {winner === 'o' && <FontAwesomeIcon className={'board__icon board__icon--o'} icon={faO}/>}
        </div>
    );
}

export default Board;
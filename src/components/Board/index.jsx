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
        makeMove(i)
    }

    return (
        <div className="board">
            {values.map((val, i) => <Box key={i} value={val} onBoxClick={() => handleClick(i)}/>)}
        </div>
    );
}

export default Board;
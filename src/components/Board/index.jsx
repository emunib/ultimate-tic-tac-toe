import React, {useState} from 'react';
import Box from '../Box';
import './style.scss';

function Board({winner, checkWinner}) {
    const [values, setValues] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    function handleClick(i) {
        if (winner || values[i]) return;

        const nextValues = [...values];
        nextValues[i] = isXTurn ? 'x' : 'o';

        setValues(nextValues);
        checkWinner(nextValues);
        setIsXTurn(isXTurn => !isXTurn);
    }

    return (
        <div className="board">
            {values.map((val, i) => <Box key={i} value={val} onBoxClick={() => handleClick(i)}/>)}
        </div>
    );
}

export default Board;
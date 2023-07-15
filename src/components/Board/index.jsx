import React, {useState} from 'react';
import Box from '../Box';
import Mark from '../Mark';
import './style.scss';

function Board({isOpen, turn, winner, makeMove}) {
    const [values, setValues] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (!isOpen || winner || values[i]) return;

        const nextValues = [...values];
        nextValues[i] = turn;

        setValues(nextValues);
        makeMove(nextValues, i);
    }

    return (
        <div className={'board-wrapper'}>
            <div className={`board ${isOpen ? '' : 'board--closed'} ${winner ? `board--won-${winner}` : ''}`}>
                {values.map((turn, i) => <Box key={i} turn={turn} onBoxClick={() => handleClick(i)}/>)}
            </div>
            <div className={'board__icon-wrapper'}>
                <Mark turn={winner} baseClass={'board__icon'}/>
            </div>
        </div>
    );
}

export default Board;
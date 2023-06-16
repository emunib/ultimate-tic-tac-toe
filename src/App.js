import {useState} from 'react';
import Box from './components/Box';
import './style.scss';

function App() {
    const [values, setValues] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function handleClick(i) {
        if (winner || values[i]) return;

        const nextValues = [...values];
        nextValues[i] = isXTurn ? 'x' : 'o';

        setValues(nextValues);
        checkWinner(nextValues);
        setIsXTurn(isXTurn => !isXTurn);
    }

    function checkWinner(values) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (values[a] && values[a] === values[b] && values[a] === values[c]) {
                setWinner(values[a]);
            }
        }
    }

    return (
        <>
            <p>Winner: {winner}</p>
            <div className="app">
                {values.map((val, i) => <Box key={i} value={val} onBoxClick={() => handleClick(i)}/>)}
            </div>
        </>
    );
}

export default App;

import {useState} from 'react';
import Board from './components/Board';
import './style.scss';

function App() {
    const [boards, setBoards] = useState(Array(9).fill(null));

    function checkWinner(board, values) {
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
                const nextBoards = [...boards];
                nextBoards[board] = values[a];
                setBoards(nextBoards);
            }
        }
    }

    return (
        <>
            {boards.map((board, i) => <Board key={i} winner={board} checkWinner={(values) => checkWinner(i, values)}/>)}
        </>
    );
}

export default App;

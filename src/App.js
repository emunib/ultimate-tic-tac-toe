import {useState} from 'react';
import Board from './components/Board';
import './style.scss';

function App() {
    const [boards, setBoards] = useState(Array(9).fill(null));
    const [isBoardOpen, setIsBoardOpen] = useState(Array(9).fill(true));
    const [isXTurn, setIsXTurn] = useState(true);

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

    function makeMove(i) {
        setIsXTurn(prevState => !prevState);

        let nextIsBoardOpen;

        if (boards[i]) {
            nextIsBoardOpen = boards.map(board => board === null);
        } else {
            nextIsBoardOpen = Array(9).fill(false);
            nextIsBoardOpen[i] = true;
        }

        setIsBoardOpen(nextIsBoardOpen);
    }

    return (
        <div className={"main"}>
            {boards.map((board, i) => <Board key={i} isOpen={isBoardOpen[i]} winner={board} turn={isXTurn ? 'x' : 'o'}
                                             checkWinner={(values) => checkWinner(i, values)} makeMove={makeMove}/>)}
        </div>
    );
}

export default App;

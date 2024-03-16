import {useState} from 'react';
import Board from './components/Board';
import './style.scss';

function App() {
    const [boards, setBoards] = useState(Array(9).fill(null));
    const [isBoardOpen, setIsBoardOpen] = useState(Array(9).fill(true));
    const [isXTurn, setIsXTurn] = useState(true);
    const turn = isXTurn ? 'x' : 'o';
    const [gameWinner, setGameWinner] = useState(null);

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
                return values[a];
            }
        }
    }

    function makeMove(values, clickedBox, clickedBoard) {
        const boardWinner = checkWinner(values);

        const nextBoards = [...boards];

        if (boardWinner) {
            nextBoards[clickedBoard] = boardWinner;
            setBoards(nextBoards);

            const winner = checkWinner(nextBoards);

            if (winner) {
                setIsBoardOpen(Array(9).fill(false));
                setGameWinner(winner);
                return;
            }
        }

        let nextIsBoardOpen;

        if (nextBoards[clickedBox]) {
            nextIsBoardOpen = nextBoards.map(board => board === null);
        } else {
            nextIsBoardOpen = Array(9).fill(false);
            nextIsBoardOpen[clickedBox] = true;
        }

        setIsBoardOpen(nextIsBoardOpen);
        setIsXTurn(prevState => !prevState);
    }

    return (
        <>
            <h1 className={'title'}>Ultimate Tic-Tac-Toe</h1>
            <h2 className={'sub'}>{gameWinner ? `${gameWinner} wins!` : `${turn}'s turn`}</h2>
            <div className={'main'}>
                {boards.map((board, i) => <Board key={i} isOpen={isBoardOpen[i]} winner={board}
                                                 turn={turn}
                                                 makeMove={(values, clickedBox) => makeMove(values, clickedBox, i)}/>)}
            </div>
        </>
    );
}

export default App;

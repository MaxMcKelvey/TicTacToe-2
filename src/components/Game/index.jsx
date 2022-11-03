import React, {useState} from "react";
import { getIsBoardFull } from "../../hooks/getIsBoardFull";
import { getRandomIndex } from "../../hooks/getRandomIndex";
import { getWinner } from "../../hooks/getWinner";
import Board from "../Board";
import Box from "../Box";
import "./Game.css";

// creates a game of tictactoes inside a game of tictactoe
const Game = () => {
    const blankBoardSmall = () => {
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(' ');
        }
        return arr;
    }
    
    const blankBoardLarge = () => {
        const arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(blankBoardSmall());
        }
        return arr;
    }
    
    const [, updateState] = useState();
    const [boxArr, setBoxArr] = useState(blankBoardLarge());
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winningPlayer, setWinningPlayer] = useState(null);
    const [isComputerPlayer, setIsComputerPlayer] = useState(false);

    const getSmallBoards = (position) => {
        return <Board getChild={(index) => getBoxes(position, index)} />;
    }

    const getBoxes = (position, index) => {
        return <Box board={position} index={index} handleClick={handleClick} char={boxArr[position][index]}/>;
    }

    const handleClick = (board, index) => {
        if (winningPlayer) return;
        if (isComputerPlayer && currentPlayer === 'O') return;

        const arr = boxArr.slice();
        if (arr[board][index] !== ' ') return;
        if (getWinner(arr[board]) !== ' ') return;

        arr[board][index] = currentPlayer;
        if (currentPlayer === 'X') setCurrentPlayer('O');
        else setCurrentPlayer('X');
        setBoxArr(arr);
        
        let winner = getWinner(arr.map((smallBoard) => getWinner(smallBoard)));
        if (winner !== ' ') setWinningPlayer(winner);
        
        setTimeout(() => {
            if (isComputerPlayer && !winningPlayer) computerPlayerTurn();
        }, 500);
        
        setTimeout(() => {
            if (getWinner(arr[board]) === ' ' && getIsBoardFull(arr[board])) {
                arr[board] = blankBoardSmall();
                setBoxArr(arr);
                updateState({});
            }
        }, 200);
    }

    const computerPlayerTurn = () => {
        const arr = boxArr.slice();
        let randIdx = getRandomIndex(arr);
        arr[randIdx.board][randIdx.index] = 'O';

        setCurrentPlayer('X');

        let winner = getWinner(arr.map((smallBoard) => getWinner(smallBoard)));
        if (winner !== ' ') setWinningPlayer(winner);
    }

    const resetBoard = () => {
        setBoxArr(blankBoardLarge());
        setCurrentPlayer('X');
        setWinningPlayer(null);
    }

    return (
        <section className="vert">
            Welcome to TicTacToe!
            <label>
                <input
                    type="checkbox"
                    checked={isComputerPlayer}
                    onChange={() => setIsComputerPlayer(!isComputerPlayer)}
                />
                Computer is Player O
            </label>
            <button onClick={resetBoard} style={{width: '50px'}}>Reset</button>
            <body>
                {winningPlayer ? `Player ${winningPlayer} wins!` : `Player ${currentPlayer}'s turn`}
            </body>
            <Board getChild={getSmallBoards} />
        </section>
    );
}

export default Game;
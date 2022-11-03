// takes an array of 9 boxes in a game of tictactoe
// and returns true if the board is full
export const getIsBoardFull = (board) => {
    for (let i = 0; i < 9; i++) {
        if (board[i] === ' ') return false;
    }
    return true;
}
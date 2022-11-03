// returns the character of the winning player in a
// 9x9 game of tictactoe, and ' ' if there is no winner
export const getWinner = (board) => {
    for (let i = 0; i < 3; i++) {
        if (board[3*i] === board[(3*i)+1] && board[3*i] === board[(3*i)+2] && board[3*i] !== ' ') return board[3*i];
        if (board[i] === board[i+3] && board[i] === board[i+6] && board[i] !== ' ') return board[i];
    }
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== ' ') return board[0];
    if (board[2] === board[4] && board[2] === board[6] && board[2] !== ' ') return board[2];
    return ' ';
}
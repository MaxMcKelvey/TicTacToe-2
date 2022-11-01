export const getIsBoardFull = (board) => {
    for (let i = 0; i < 9; i++) {
        if (board[i] === ' ') return false;
    }
    return true;
}
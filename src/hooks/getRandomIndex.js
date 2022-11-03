// returns a random empty box in the full meta-game of
// tictactoe in the format {board: randBoard, index: randIndex}
export const getRandomIndex = (board) => {
    let randomIndex = Math.floor(Math.random() * 9 * 9);
    while (board[Math.floor((randomIndex % 81) / 9)][randomIndex % 9] !== ' ') randomIndex++;
    return {board: Math.floor((randomIndex % 81) / 9), index: (randomIndex % 9)};
}
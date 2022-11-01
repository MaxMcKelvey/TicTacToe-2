# TicTacToe

## Initial Ideas

I will create two different main components, a tictactoe component and a box component. I am hoping to be able to do this recursively, so that I can do something like tictactoe(tictactoe(box)). This will have to be overall controlled with a `game` component.

## Actual Implementation

I followed through with my hypothetical recursive approach. It worked ...

Developing this program took me about two hours. If I were to continue development, I would make a few changes.

1.  I would write the game element in a way that makes it more readable; it has many functions which may be difficult to decypher. 
2. I would improve the 'tie' seeking behavior to include boards which cannot be won but still have empty squares, because my implementation only resets boards which are empty.
3. I would allow the meta game to end in a tie, I didn't have time to implement this feature so there is a theoretical stalemate situation where no player can play because every board is won but the boards form a meta-tie.
4. I would make the code more organized; I wrote based off of my initial outline but some of the later features felt stuck-into the existing code rather than being planned for.

### The Computer

I believe that I used the optimal computer player algorithm, which chooses a random cell on the board and then increments the cell until it is empty. This has a maximum time of O(n), and has no extra overhead.

## Running the Implementation

In this folder open the terminal and run `npm start`.
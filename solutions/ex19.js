/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
Input
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
Instruction
Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/

// Function to generate the chess board with two queens
const generateBoard = function(whiteQueen, blackQueen) {
  const board = [];
  
  // Initialize the 8x8 board with 0s
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    board.push(row);
  }
  
  // Place the white queen and black queen on the board
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  
  return board;
};

// Function to check if two queens can attack each other
const queenThreat = function(board) {
  let queenPositions = [];
  
  // Find the positions of the queens
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1) {
        queenPositions.push([i, j]);
      }
    }
  }
  
  // Extract the positions of the two queens
  const [queen1, queen2] = queenPositions;
  
  // Check if they are on the same row or column
  if (queen1[0] === queen2[0] || queen1[1] === queen2[1]) {
    return true;
  }
  
  // Check if they are on the same diagonal
  if (Math.abs(queen1[0] - queen2[0]) === Math.abs(queen1[1] - queen2[1])) {
    return true;
  }
  
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard)); // true

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard)); // false

module.exports = { generateBoard, queenThreat };

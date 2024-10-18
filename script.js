// Set Variables
const gameField = document.querySelectorAll(".field");
const turnMessage = document.querySelector(".message");
const resultMessage = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-button");

// Initialize game board
// const gameBoard = {
//     cells: [],
//     currentPlayer: "X",
//     isGameOver: false,
//     winningCombinations: [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ]
// };

const gameBoard = {
  board: Array(9).fill(null),

  resetBoard() {
    this.board = Array(9).fill(null);
  },

  setMarker(index, symbol) {
    if (this.board[index] === null) {
      this.board[index] = symbol;
      return true;
    }
    return false;
  },

  winningConditions: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
};

const playerX = {
  symbol: "X",
  picks: [],
};

const playerO = {
  symbol: "O",
  picks: [],
};

let currentPlayer = playerX;
let gameOver = false;

gameField.addEventListener("click", () => {
  if (gameField.value !== "X" || gameFieldvalue !== "O") {
    gameField.value = currentPlayer.symbol;
    gameBoard.board.push(gameField.value);
    currentPlayer.picks.push(parseInt(gameField.data - index));
  }
});

const checWin(playerPicks) {
    return gameBoard.winningCombinations.some((combination) => {
      return combination.every((index) => playerPicks.includes(index));
    });
}

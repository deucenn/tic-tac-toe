// Set Variables
const gameFields = document.querySelectorAll(".field");
const turnMessage = document.querySelector(".message");
const resultMessage = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-button");

// Gameboard object
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

// Add event listeners to each game field
gameFields.forEach((field) => {
  field.addEventListener("click", handleMove);
});

resetBtn.addEventListener("click", () => {
  gameBoard.resetBoard();
  gameFields.forEach((cell) => (cell.textContent = "")); // 
  gameOver = false;
  currentPlayer = playerX;
  playerX.picks = [];
  playerO.picks = [];  
  turnMessage.textContent = `Player ${currentPlayer.symbol}'s turn`;
  resultMessage.textContent = "";
});

// Functions
function handleMove(event) {
  const field = event.target;
  const index = field.getAttribute("data-index")

  // Only place a marker if the field is empty and the game is not over
  if (!gameOver && gameBoard.setMarker(index, currentPlayer.symbol)) {
    field.textContent = currentPlayer.symbol;  
    currentPlayer.picks.push(parseInt(index));  

    // Check for a winner
    if (checkWin(currentPlayer.picks)) {
      resultMessage.textContent = `Player ${currentPlayer.symbol} wins!`;
      gameOver = true;  
    } else if (gameBoard.board.every(cell => cell !== null)) {
      resultMessage.textContent = "It's a draw!";
      gameOver = true;  
    } else {
      switchPlayer();  
    }
  }
}

function checkWin(playerPicks) {
  return gameBoard.winningConditions.some((combination) => {
    return combination.every((index) => playerPicks.includes(index));
  });
}

function switchPlayer() {
  currentPlayer = currentPlayer === playerX ? playerO : playerX;
  turnMessage.textContent = `Player ${currentPlayer.symbol}'s turn`;
}

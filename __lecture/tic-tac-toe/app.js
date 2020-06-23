// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector("#board");
const player1 = document.querySelector(".js-player-1");
const player2 = document.querySelector(".js-player-2");
const endMessageDiv = document.querySelector(".js-end-message");
const restartBtn = document.querySelector(".restart");

// this array tracks the state of the game board.
const game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Game Settings
const PLAYER_1_ICON = "X";
const PLAYER_2_ICON = "O";
let COUNTER = 0; // track game progress

// game starts with player 1
let currentPlayer = "1";
player1.classList.add("active");

const handleRestart = () => {
  // reload the page
  // feels like cheating but it WILL reset the game
  window.location.reload();
};

const toggleRestartBtn = () => {
  // enable the restart btn
  restartBtn.disabled = false;
  restartBtn.addEventListener("click", handleRestart);
};

const win = () => {
  // stop board from being clickable
  // print the winner to the screen
  // activate the restart btn
  board.removeEventListener("click", handleClick);
  toggleRestartBtn();
  if (currentPlayer === "1") {
    endMessageDiv.innerText = `O has won!`;
  } else if (currentPlayer === "2") {
    endMessageDiv.innerText = `X has won!`;
  }
};

const verifyWin = () => {
  if (COUNTER === 9) {
    endMessageDiv.innerText = `It's a draw!`;
    toggleRestartBtn();
    board.removeEventListener("click", handleClick);
  }
  // Use the game array to determine the winner.
  if (game[0] === game[1] && game[1] === game[2]) win();
  if (game[3] === game[4] && game[4] === game[5]) win();
  if (game[6] === game[7] && game[7] === game[8]) win();
  // COLUMNS
  if (game[0] === game[3] && game[3] === game[6]) win();
  if (game[1] === game[4] && game[4] === game[7]) win();
  if (game[2] === game[5] && game[5] === game[8]) win();
  // DIAGONALS
  if (game[0] === game[4] && game[4] === game[8]) win();
  if (game[2] === game[4] && game[4] === game[6]) win();
};

const togglePlayer = () => {
  // use .active to show active player visually...
  player1.classList.toggle("active");
  player2.classList.toggle("active");
  currentPlayer = currentPlayer === "1" ? "2" : "1";
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === "1" ? PLAYER_1_ICON : PLAYER_2_ICON;

  if (typeof game[cellId] === "number") {
    currentCellDiv.innerText = icon;
    COUNTER++;
    // so much missing here...
    if (currentPlayer === "1") {
      game[cellId] = PLAYER_1_ICON;
    } else if (currentPlayer === "2") {
      game[cellId] = PLAYER_2_ICON;
    }
  }
  togglePlayer();
  verifyWin();
};

board.addEventListener("click", handleClick);

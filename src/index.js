let xicon = document.getElementById("xicon")
let oicon = document.getElementById("oicon")
let currentchoice = "xicon"
let Btn1 = document.getElementById("Btn1")
let Btn2 = document.getElementById("Btn2")
let startmenu = document.getElementById("startmenu")
let gamediv = document.getElementById("gamediv")
let WhoAreYou = document.getElementById("WhichAreYou")
let WhichIsPc = document.getElementById("WhichIsPc")
let NextRound = document.getElementById("NextRound")
let Xwins = document.getElementById("Xwins")
let Owins = document.getElementById("Owins")
let Xscore = document.getElementById("Xscore")
let Oscore = document.getElementById("Oscore")
let TieScore = document.getElementById("TieScore")
let GameResult = document.getElementById("GameResult")
let Allsquare = document.getElementById("Allsquare")
let CountXonBoard = 0
let CountOonBoard = 0
let ResultX = document.getElementById("ResultX")
let ResultO = document.getElementById("ResultO")
let TakesRound = document.getElementById("TakesRound")
let board = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
];
  // Create Board With 2D Array and Add Html Divs
  let boardWithDivs = [];
  let b = 0;
  for (i = 0; i < 3; ++i) {
    boardWithDivs[i] = [];
    for (j = 0; j < 3; ++j) {
      boardWithDivs[i][j] = document.getElementById(b);
      b = b + 1;
    }
  }
document.querySelectorAll('button').forEach(occurence => {

  let id = occurence.getAttribute('id');
  occurence.addEventListener('click', function () {
    if (id == "xicon") {
      xicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center bg-Silver"
      document.getElementById("partX1").className = "w-2.5 h-[42px] bg-DarkNavy -rotate-45 absolute rounded-[5px]"
      document.getElementById("partX2").className = "w-2.5 h-[42px] bg-DarkNavy rotate-45 absolute rounded-[5px]"

      oicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center hover:bg-SemiDarkNavy"
      oicon.children[0].className = "w-8 h-8 rounded-[50%] flex justify-center items-center bg-Silver"
      oicon.children[0].children[0].className = "w-3 h-3 rounded-[50%] bg-DarkNavy"
      currentchoice = "xicon"
    } else if (id == "oicon") {
      xicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center hover:bg-SemiDarkNavy"
      document.getElementById("partX1").className = "w-2.5 h-[42px] bg-Silver -rotate-45 absolute rounded-[5px]"
      document.getElementById("partX2").className = "w-2.5 h-[42px] bg-Silver rotate-45 absolute rounded-[5px]"

      oicon.className = "w-[198px] h-[54px] rounded-[10px] cursor-pointer flex justify-center items-center bg-Silver"
      oicon.children[0].className = "w-8 h-8 rounded-[50%] flex justify-center items-center bg-DarkNavy"
      oicon.children[0].children[0].className = "w-3 h-3 rounded-[50%] bg-Silver"
      currentchoice = "oicon"
    }
  });
});
Btn1.addEventListener("click", function () {
  startmenu.classList.add("hidden")
  startmenu.classList.remove("flex")
  gamediv.classList.remove("hidden")
  gamediv.classList.add("flex")
  if (currentchoice == "xicon") {
    WhoAreYou.innerText = "X (YOU)"
    WhichIsPc.innerText = "O (CPU)"
  } else if (currentchoice == "oicon") {
    WhichIsPc.innerHTML = "X (CPU)"
    WhoAreYou.innerHTML = "O (YOU)"
  }

  const BOARD_SIZE = 3;

  const X = 'X';
  const O = 'O';



  let currentPlayer = X;

  const getNextPlayer = (currentPlayer) => {
    return currentPlayer === X ? O : X;
  }

  let roww;
  let coll;
  // Check which was clicked
  Allsquare.addEventListener('click', function (event) {
    const clickedElement = event.target;
    if (clickedElement.matches('.square')) {
      // Get the row and column of the clicked square
      for (let ii = 0; ii < 3; ii++) {
        for (let jj = 0; jj < 3; jj++) {
          if (boardWithDivs[ii][jj].id === clickedElement.id && board[ii][jj] == 0) {
            boardWithDivs[ii][jj].children[0].className = "flex"
            roww = ii;
            coll = jj;
            play()

          }
        }
      }
      // play()
    }
  });
  Allsquare.addEventListener('mouseover', function (event) {
    // Check if the event target is a square element
    if (event.target.matches(".square")) {
      // Get the children of the square element
      let img0 = event.target.children[0];
      let img1 = event.target.children[1];

      // Get the computed styles of the children
      var style1 = window.getComputedStyle(img0);
      var style2 = window.getComputedStyle(img1);

      // Check if both children are hidden
      if (style1.display === "none" && style2.display === "none") {
        // Show the third child
        event.target.children[2].style.display = "flex";
      }
    }
  });

  Allsquare.addEventListener('mouseout', function (event) {
    // Check if the event target is a square element
    if (event.target.matches(".square")) {
      // Hide the third child
      event.target.children[2].style.display = "none";
    }
  });

  const makeMove = (row, col) => {
    if (board[row][col] !== 0) {
      return;
    }
    board[row][col] = currentPlayer;
    currentPlayer = getNextPlayer(currentPlayer);
  }

  const checkWin = () => {
    // Check rows
    for (let row = 0; row < BOARD_SIZE; row++) {
      if (board[row][0] !== 0 && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        return true;
      }
    }
    // Check columns
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[0][col] !== 0 && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return true;
      }
    }
    // Check diagonals
    if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true;
    }
    if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true;
    }
    return false;
  }

  const getBestMove = () => {
    // Check if we can win in the next move
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (board[row][col] === 0) {
          board[row][col] = O;
          if (checkWin()) {
            board[row][col] = 0;
            return { row, col };
          }
          board[row][col] = 0;
        }
      }
    }
    // Check if the player can win in the next move, and block them
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (board[row][col] === 0) {
          board[row][col] = X;
          if (checkWin()) {
            board[row][col] = 0;
            return { row, col };
          }
          board[row][col] = 0;
        }
      }
    }
    // Find an empty corner
    if (board[0][0] === 0) {
      return { row: 0, col: 0 };
    }
    if (board[0][2] === 0) {
      return { row: 0, col: 2 };
    }
    if (board[2][0] === 0) {
      return { row: 2, col: 0 };
    }
    if (board[2][2] === 0) {
      return { row: 2, col: 2 };
    }
    // Find an empty side
    if (board[0][1] === 0) {
      return { row: 0, col: 1 };
    }
    if (board[1][0] === 0) {
      return { row: 1, col: 0 };
    }
    if (board[1][2] === 0) {
      return { row: 1, col: 2 };
    }
    if (board[2][1] === 0) {
      return { row: 2, col: 1 };
    }
    return null;
  }

  const play = () => {

    // Player's turn
    let row = roww
    let col = coll
    makeMove(row, col);
    if (checkWin()) {
      setTimeout(() => {
        GameResult.classList.remove("hidden")
        GameResult.classList.add("flex")
        ResultX.className = "flex"
        ResultO.className = "hidden"
        TakesRound.className = "font-Outfit font-bold text-[40px] leading-[50px] tracking-[2.5px] uppercase text-LightBlue"
        TakesRound.innerText = "TAKES THE ROUND"
        GameResult.children[0].classList.remove("hidden")
        GameResult.children[0].innerText = "YOU WON!"
        Xscore.innerText++
      }, 300);
    }
    else if (board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) {
      // Computer's turn
      let move = getBestMove();
      makeMove(move.row, move.col);
      setTimeout(() => {
        boardWithDivs[move.row][move.col].children[1].className = "flex"
      }, 300)

      if (checkWin()) {
        setTimeout(() => {
          GameResult.classList.remove("hidden")
          GameResult.classList.add("flex")
          ResultX.className = "hidden"
          ResultO.className = "flex"
          TakesRound.className = "font-Outfit font-bold text-[40px] leading-[50px] tracking-[2.5px] uppercase text-LightYellow"
          TakesRound.innerText = "TAKES THE ROUND"
          GameResult.children[0].classList.remove("hidden")
          GameResult.children[0].innerText = "OH NO, YOU LOST…"
          Oscore.innerText++
        }, 300);
      }
    } else {
      setTimeout(() => {
        GameResult.classList.remove("hidden")
        GameResult.classList.add("flex")
        ResultX.className = "hidden"
        ResultO.className = "hidden"
        TakesRound.className = "font-Outfit font-bold text-[40px] leading-[50px] tracking-[2.5px] uppercase text-Silver"
        TakesRound.innerText = "ROUND TIED"
        GameResult.children[0].classList.add("hidden")
        TieScore.innerText++
      }, 300);
    }

  }
})



NextRound.addEventListener("click", function () {
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  CountOonBoard = 0
  CountXonBoard = 0
  for (i = 0; i < 3; i++) {
    for (a = 0; a < 3; a++) {
      boardWithDivs[i][a].children[0].className = "hidden"
      boardWithDivs[i][a].children[1].className = "hidden"
      GameResult.classList.remove("flex")
      GameResult.classList.add("hidden")

    }
  }
})


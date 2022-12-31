let xicon = document.getElementById("xicon")
let oicon = document.getElementById("oicon")
let currentchoice
let Btn1 = document.getElementById("Btn1")
let Btn2 = document.getElementById("Btn2")
let startmenu = document.getElementById("startmenu")
let gamediv = document.getElementById("gamediv")
let WhoAreYou = document.getElementById("WhichAreYou")
let WhichIsPc = document.getElementById("WhichIsPc")
let NextRound = document.getElementById("NextRound")
let Quit = document.getElementById("Quit")
let Xwins = document.getElementById("Xwins")
let Owins = document.getElementById("Owins")
let Xscore = document.getElementById("Xscore")
let Oscore = document.getElementById("Oscore")
let TieScore = document.getElementById("TieScore")
let GameResult = document.getElementById("GameResult")
let Allsquare = document.getElementById("Allsquare")
let ResultX = document.getElementById("ResultX")
let ResultO = document.getElementById("ResultO")
let TakesRound = document.getElementById("TakesRound")
let number = 0;
let Xturn = document.getElementById("Xturn")
let Oturn = document.getElementById("Oturn")
let NumOfOmoves = 0
let NumOfXmoves = 0
let ModeNormal = document.getElementById("ModeNormal")
let ModeDifficult = document.getElementById("ModeDifficult")
let currentMode
let UltimateMode
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
// add click effects for buttons
document.querySelectorAll('button').forEach(occurence => {

  let id = occurence.getAttribute('id');
  occurence.addEventListener('click', function () {
    if (id == "xicon") {
      xicon.classList.add("bg-Silver")
      xicon.classList.remove("hover:bg-SemiDarkNavy")
      document.getElementById("partX1").classList.add("bg-DarkNavy")
      document.getElementById("partX1").classList.remove("bg-Silver")
      document.getElementById("partX2").classList.add("bg-DarkNavy")
      document.getElementById("partX2").classList.remove("bg-Silver")

      oicon.classList.add("hover:bg-SemiDarkNavy")
      oicon.classList.remove("bg-Silver")
      oicon.children[0].classList.add("bg-Silver")
      oicon.children[0].classList.remove("bg-DarkNavy")
      oicon.children[0].children[0].classList.add("bg-DarkNavy")
      oicon.children[0].children[0].classList.remove("bg-Silver")
      currentchoice = "X"
    } else if (id == "oicon") {
      xicon.classList.remove("bg-Silver")
      xicon.classList.add("hover:bg-SemiDarkNavy")
      document.getElementById("partX1").classList.remove("bg-DarkNavy")
      document.getElementById("partX1").classList.add("bg-Silver")
      document.getElementById("partX2").classList.remove("bg-DarkNavy")
      document.getElementById("partX2").classList.add("bg-Silver")

      oicon.classList.remove("hover:bg-SemiDarkNavy")
      oicon.classList.add("bg-Silver")
      oicon.children[0].classList.remove("bg-Silver")
      oicon.children[0].classList.add("bg-DarkNavy")
      oicon.children[0].children[0].classList.remove("bg-DarkNavy")
      oicon.children[0].children[0].classList.add("bg-Silver")
      currentchoice = "O"
    } else if (id == "ModeNormal") {
      ModeNormal.classList.add("bg-Silver")
      ModeNormal.classList.remove("hover:bg-SemiDarkNavy")
      document.getElementById("NormalText").classList.add("text-DarkNavy")
      document.getElementById("NormalText").classList.remove("text-Silver")

      ModeDifficult.classList.remove("bg-Silver")
      ModeDifficult.classList.add("hover:bg-SemiDarkNavy")
      document.getElementById("DifficultText").classList.remove("text-DarkNavy")
      document.getElementById("DifficultText").classList.add("text-Silver")
      currentMode = "Normal"
    } else if (id == "ModeDifficult") {
      ModeNormal.classList.remove("bg-Silver")
      ModeNormal.classList.add("hover:bg-SemiDarkNavy")
      document.getElementById("NormalText").classList.remove("text-DarkNavy")
      document.getElementById("NormalText").classList.add("text-Silver")

      ModeDifficult.classList.add("bg-Silver")
      ModeDifficult.classList.remove("hover:bg-SemiDarkNavy")
      document.getElementById("DifficultText").classList.add("text-DarkNavy")
      document.getElementById("DifficultText").classList.remove("text-Silver")
      currentMode = "Difficult"
    }
  });
});
// add hover effects on board
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
        if(currentchoice == "X"){
          event.target.children[2].style.display = "flex";
        }else if(currentchoice == "O"){
          event.target.children[3].style.display = "flex";
        }
      }
    
  }
});
Allsquare.addEventListener('mouseout', function (event) {
  // Check if the event target is a square element
  if (event.target.matches(".square")) {
    // Hide the third child
    if(currentchoice == "X"){
      event.target.children[2].style.display = "none";
    }else if(currentchoice == "O"){
      event.target.children[3].style.display = "none";

    }
  }
});
// start code for game
const BOARD_SIZE = 3;
const X = 'X';
const O = 'O';
let roww;
let coll;
let FirstMove = []
// find who is next player
let currentPlayer = X;
const getNextPlayer = (currentPlayer) => {
  return currentPlayer === X ? O : X;
}
// code for start next round
NextRound.addEventListener("click", function () {
  for (i = 0; i < 3; i++) {
    for (a = 0; a < 3; a++) {
      boardWithDivs[i][a].children[0].className = "hidden"
      boardWithDivs[i][a].children[1].className = "hidden"
      GameResult.classList.remove("flex")
      GameResult.classList.add("hidden")
    }
  }
  board = [[0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
  ]
  NumOfOmoves = 0
  NumOfXmoves = 0
  number = 0
  Xturn.classList.add("flex")
  Xturn.classList.remove("hidden")
  Oturn.classList.add("hidden")
  Oturn.classList.remove("flex")
  gamediv.classList.remove("pointer-events-none")
  if (currentchoice == "O") {
    play()
  }
});
// code for quit game
Quit.addEventListener("click", function () {
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  NumOfOmoves = 0
  NumOfXmoves = 0
  number = 0
  Xscore.innerText = 0
  Oscore.innerText = 0
  TieScore.innerText = 0
  Xturn.classList.add("flex")
  Xturn.classList.remove("hidden")
  Oturn.classList.add("hidden")
  Oturn.classList.remove("flex")
  gamediv.classList.remove("pointer-events-none")
  for (i = 0; i < 3; i++) {
    for (a = 0; a < 3; a++) {
      boardWithDivs[i][a].children[0].className = "hidden"
      boardWithDivs[i][a].children[1].className = "hidden"
      GameResult.classList.remove("flex")
      GameResult.classList.add("hidden")


    }
  }
  startmenu.classList.remove("hidden")
  startmenu.classList.add("flex")
  gamediv.classList.add("hidden")
  gamediv.classList.remove("flex")
  currentMode = ""
  currentchoice = ""
  ModeNormal.classList.remove("bg-Silver")
  ModeNormal.classList.add("hover:bg-SemiDarkNavy")
  document.getElementById("NormalText").classList.remove("text-DarkNavy")
  document.getElementById("NormalText").classList.add("text-Silver")
  ModeDifficult.classList.remove("bg-Silver")
  ModeDifficult.classList.add("hover:bg-SemiDarkNavy")
  document.getElementById("DifficultText").classList.remove("text-DarkNavy")
  document.getElementById("DifficultText").classList.add("text-Silver")


  xicon.classList.remove("bg-Silver")
  xicon.classList.add("hover:bg-SemiDarkNavy")
  document.getElementById("partX1").classList.remove("bg-DarkNavy")
  document.getElementById("partX1").classList.add("bg-Silver")
  document.getElementById("partX2").classList.remove("bg-DarkNavy")
  document.getElementById("partX2").classList.add("bg-Silver")

  oicon.classList.add("hover:bg-SemiDarkNavy")
  oicon.classList.remove("bg-Silver")
  oicon.children[0].classList.add("bg-Silver")
  oicon.children[0].classList.remove("bg-DarkNavy")
  oicon.children[0].children[0].classList.add("bg-DarkNavy")
  oicon.children[0].children[0].classList.remove("bg-Silver")
})
// code for playing logic
const play = () => {

  if (currentchoice == "X") {
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
        gamediv.classList.add("pointer-events-none")
        Xscore.innerText++
      }, 400);
    }
    else if (board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) {
      // Computer's turn
      let move = getBestMove();
      makeMove(move.row, move.col);
      setTimeout(() => {
        boardWithDivs[move.row][move.col].children[1].className = "flex"
        NumOfOmoves++
        Xturn.classList.add("flex")
        Xturn.classList.remove("hidden")
        Oturn.classList.add("hidden")
        Oturn.classList.remove("flex")
      }, 400)

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
          gamediv.classList.add("pointer-events-none")
          Oscore.innerText++
        }, 400);
      }
    } else {
      setTimeout(() => {
        GameResult.classList.remove("hidden")
        GameResult.classList.add("flex")
        ResultX.className = "hidden"
        ResultO.className = "hidden"
        TakesRound.className = "font-Outfit font-bold text-[40px] leading-[50px] tracking-[2.5px] uppercase text-Silver"
        TakesRound.innerText = "ROUND TIED"
        gamediv.classList.add("pointer-events-none")
        GameResult.children[0].classList.add("hidden")
        TieScore.innerText++
      }, 400);
    }
  } else if (currentchoice == "O") {

    setTimeout(() => {
      if (NumOfXmoves > 0) {
        let row = roww
        let col = coll
        makeMove(row, col);
      }
      if (checkWin()) {
        GameResult.classList.remove("hidden")
        GameResult.classList.add("flex")
        ResultX.className = "hidden"
        ResultO.className = "flex"
        TakesRound.className = "font-Outfit font-bold text-[40px] leading-[50px] tracking-[2.5px] uppercase text-LightYellow"
        TakesRound.innerText = "TAKES THE ROUND"
        GameResult.children[0].classList.remove("hidden")
        GameResult.children[0].innerText = "OH NO, YOU LOST…"
        gamediv.classList.add("pointer-events-none")
        Oscore.innerText++
      } else if (board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) {
        // Computer's turn
        let move = getBestMove();
        makeMove(move.row, move.col);
        boardWithDivs[move.row][move.col].children[0].className = "flex"
        NumOfOmoves++
        Xturn.classList.add("flex")
        Xturn.classList.remove("hidden")
        Oturn.classList.add("hidden")
        Oturn.classList.remove("flex")
        if (checkWin()) {
          GameResult.classList.remove("hidden")
          GameResult.classList.add("flex")
          ResultX.className = "flex"
          ResultO.className = "hidden"
          TakesRound.className = "font-Outfit font-bold text-[40px] leading-[50px] tracking-[2.5px] uppercase text-LightBlue"
          TakesRound.innerText = "TAKES THE ROUND"
          GameResult.children[0].classList.remove("hidden")
          GameResult.children[0].innerText = "YOU WON!"
          gamediv.classList.add("pointer-events-none")
          Xscore.innerText++
        } else if (!board[0].includes(0) && !board[1].includes(0) && !board[2].includes(0)) {
          GameResult.classList.remove("hidden")
          GameResult.classList.add("flex")
          ResultX.className = "hidden"
          ResultO.className = "hidden"
          TakesRound.className = "font-Outfit font-bold text-[40px] leading-[50px] tracking-[2.5px] uppercase text-Silver"
          TakesRound.innerText = "ROUND TIED"
          gamediv.classList.add("pointer-events-none")
          GameResult.children[0].classList.add("hidden")
          TieScore.innerText++
        }
      }
    }, 400)
  }
}



// find which move player made
const makeMove = (row, col) => {
  if (board[row][col] !== 0) {
    return;
  }
  board[row][col] = currentPlayer;
  currentPlayer = getNextPlayer(currentPlayer);
}
// check for win
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
// find best move for pc player
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
  if (currentMode == "Difficult") {
    if (FirstMove[0] == 1 && FirstMove[1] == 1) {
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

    } else if ((FirstMove[0] == 0 && FirstMove[1] == 0) ||
      (FirstMove[0] == 2 && FirstMove[1] == 0) ||
      (FirstMove[0] == 0 && FirstMove[1] == 2) ||
      (FirstMove[0] == 2 && FirstMove[1] == 2)) {
      if (board[1][1] === 0) {
        return { row: 1, col: 1 };
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
      return null;
    } else if (FirstMove[0] == 1 && FirstMove[1] == 2) {
      if (board[1][1] === 0) {
        return { row: 1, col: 1 };
      }
      if (board[0][2] === 0) {
        return { row: 0, col: 2 };
      }
      if (board[2][0] === 0) {
        return { row: 2, col: 0 };
      }
      if (board[0][0] === 0) {
        return { row: 0, col: 0 };
      }
      if (board[2][2] === 0) {
        return { row: 2, col: 2 };
      }
    }
    else {
      if (board[1][1] === 0) {
        return { row: 1, col: 1 };
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
  } else if (currentMode == "Normal") {
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

}
// start game by clicking btn1
Btn1.addEventListener("click", function () {

  if ((currentchoice == "X") && (currentMode == "Difficult" || currentMode == "Normal")) {
    startmenu.classList.add("hidden")
    startmenu.classList.remove("flex")
    gamediv.classList.remove("hidden")
    gamediv.classList.add("flex")
    WhoAreYou.innerText = "X (YOU)"
    WhichIsPc.innerText = "O (CPU)"
    Xturn.classList.remove("hidden")
    Xturn.classList.add("flex")




  } else if (currentchoice == "O" && (currentMode == "Difficult" || currentMode == "Normal")) {
    WhichIsPc.innerHTML = "O (YOU)"
    WhoAreYou.innerHTML = "X (CPU)"
    startmenu.classList.add("hidden")
    startmenu.classList.remove("flex")
    gamediv.classList.remove("hidden")
    gamediv.classList.add("flex")
    Xturn.classList.remove("hidden")
    Xturn.classList.add("flex")
    play()

  }

})
// Check which was clicked
Allsquare.addEventListener('click', function (event) {
  const clickedElement = event.target;
  if (clickedElement.matches('.square')) {
    // Get the row and column of the clicked square
    for (let ii = 0; ii < 3; ii++) {
      for (let jj = 0; jj < 3; jj++) {
        if (currentchoice == "X") {
          if (boardWithDivs[ii][jj].id === clickedElement.id && board[ii][jj] == 0 && NumOfOmoves == NumOfXmoves) {
            if (number == 0) {
              FirstMove[0] = ii
              FirstMove[1] = jj
            }
            number++
            boardWithDivs[ii][jj].children[0].className = "flex"
            Xturn.classList.add("hidden")
            Xturn.classList.remove("flex")
            Oturn.classList.add("flex")
            Oturn.classList.remove("hidden")
            roww = ii;
            coll = jj;
            NumOfXmoves++
            play()

          }
        } else if (currentchoice == "O") {
          if (boardWithDivs[ii][jj].id === clickedElement.id && board[ii][jj] == 0 && NumOfOmoves - 1 == NumOfXmoves) {
            if (number == 0) {
              FirstMove[0] = ii
              FirstMove[1] = jj
            }
            number++
            boardWithDivs[ii][jj].children[1].className = "flex"
            Xturn.classList.add("hidden")
            Xturn.classList.remove("flex")
            Oturn.classList.add("flex")
            Oturn.classList.remove("hidden")
            roww = ii;
            coll = jj;
            NumOfXmoves++
            play()

          }
        }
      }
    }
  }


});





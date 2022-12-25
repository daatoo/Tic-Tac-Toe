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
let GameResult = document.getElementById("GameResult")
let Allsquare = document.getElementById("Allsquare")
let CountXonBoard = 0
let CountOonBoard = 0
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
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
})
let square = document.getElementsByClassName("square")
let array = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
let c = 0
for (i = 0; i < 3; i++) {
  for (a = 0; a < 3; a++) {
    array[i][a] = square[c]
    c++
  }
}
array.forEach(element => {

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

// Create Board With 2D Array and Add Html Divs
boardWithDivs = [];
let b = 0
for (i = 0; i < 3; ++i) {
  boardWithDivs[i] = a = [];
  for (j = 0; j < 3; ++j) {
    boardWithDivs[i][j] = document.getElementById(b)
    b = b + 1
  }
}
// Check which was clicked
Allsquare.addEventListener('click', function (event) {
  const clickedElement = event.target;
  // console.log(clickedElement)
  if (clickedElement.matches(".square")) {
    // Get the row and column of the clicked square
    let k = 0
    for (ii = 0; ii < 3; ++ii) {
      boardWithDivs[i] = a = [];
      for (jj = 0; jj < 3; ++jj) {
        if (boardWithDivs[ii][jj].id === clickedElement.id && board[ii][jj] == 0 && CountXonBoard == CountOonBoard) {
          CountXonBoard++
          boardWithDivs[ii][jj].children[0].className = "flex"
          board[ii][jj] = 1
          // check if x wins
          for (let i = 0; i < 3; i++) {
            if ((board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === 1) ||
              (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] === 1) ||
              (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === 1) ||
              (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] === 1)) {
              setTimeout(() => {
                GameResult.classList.remove("hidden")
                GameResult.classList.add("flex")
                if(currentchoice == "xicon"){
                  GameResult.children[0].innerText = "YOU WON!"
                }else if(currentchoice == "oicon"){
                  GameResult.children[0].innerText = "OH NO, YOU LOST…"
                }
                Xscore.innerText++
              }, 200);
              return board[0][i];
            }
          }
          // end check for x
          freeDivs = []
          for (i = 0; i < 3; i++) {
            for (a = 0; a < 3; a++) {
              if (board[i][a] == 0) {
                freeDivs.push(boardWithDivs[i][a])
              }
            }
          }
          const random = Math.floor(Math.random() * freeDivs.length);
          setTimeout(() => {
            freeDivs[random].children[1].className = "flex"
            CountOonBoard++
            for (i = 0; i < 3; i++) {
              for (a = 0; a < 3; a++) {
                if (boardWithDivs[i][a].id == freeDivs[random].id) {
                  board[i][a] = 2
                }
              }
            }
            // check if o wins
            // Check rows
            for (let i = 0; i < 3; i++) {
              if ((board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === 2) || 
                  (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] === 2) ||
                  (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === 2) ||
                  (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] === 2)) {
                GameResult.classList.remove("hidden")
                GameResult.classList.add("flex")
            
                if(currentchoice == "oicon"){
                  GameResult.children[0].innerText = "YOU WON!"
                }else if(currentchoice == "xicon"){
                  GameResult.children[0].innerText = "OH NO, YOU LOST…"
                }
                Oscore.innerText++
                return board[i][0];
              }
            }
          }, 300);
          // end check if o wins
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
        }
      }
    }
  }
})



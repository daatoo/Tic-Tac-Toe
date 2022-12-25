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
for(i = 0; i < 3; i++) {
  for(a = 0; a < 3; a++){
    array[i][a] = square[c]
    c++
  }
}
console.log(array)
// array.forEach(element => {
//   element.forEach(div => {
//     if(div){
//       div.addEventListener("mouseover", function(){
//         div.children[2].className = "flex"
//       })
//       div.addEventListener("mouseout", function(){
//         div.children[2].className = "hidden"
//       })
//     }
//   });
  

// });
for(i = 0; i < 3; i++) {
  for(a = 0; a < 3; a++){
    if(board[i][a] == 0){
      array[i][a].addEventListener("mouseover", function(){
        console.log(array[i][a].children[2])

        array[i][a].children[2].className = "flex"
      })
      array[i][a].addEventListener("mouseout", function(){
        array[i][a].children[2].className = "hidden"
      })
    }
  }
}
// for(i = 0; i < square.length; i++){
//   square[i].addEventListener("mouseover", function(){
//     square[i].children[2].className = "flex"
//   })
// }
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
let Allsquare = document.getElementById("Allsquare")
Allsquare.addEventListener('click', function (event) {
  const clickedElement = event.target;
  // console.log(clickedElement)
  if (clickedElement.matches(".square")) {
    // Get the row and column of the clicked square
    let k = 0
    for (ii = 0; ii < 3; ++ii) {
      boardWithDivs[i] = a = [];
      for (jj = 0; jj < 3; ++jj) {
        if (boardWithDivs[ii][jj].id === clickedElement.id && board[ii][jj] == 0) {
          boardWithDivs[ii][jj].children[0].className = "flex"
          board[ii][jj] = 1
          // console.log( boardWithDivs[ii][jj].children[0])
          // check if x wins
          // Check rows
          for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === 1) {

              setTimeout(() => {
                GameResult.classList.remove("hidden")
                GameResult.classList.add("flex")
                Xscore.innerText++
              }, 200);
              return board[i][0];
            }
          }
          // Check columns
          for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] === 1) {
              setTimeout(() => {
                GameResult.classList.remove("hidden")
                GameResult.classList.add("flex")
                Xscore.innerText++
              }, 200);
              return board[0][i];
            }
          }
          // Check diagonals
          if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === 1) {
            setTimeout(() => {
              GameResult.classList.remove("hidden")
              GameResult.classList.add("flex")
              Xscore.innerText++
            }, 200);
            return board[0][0];
          }
          if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] === 1) {
            setTimeout(() => {
              GameResult.classList.remove("hidden")
              GameResult.classList.add("flex")
              Xscore.innerText++
            }, 200);
            return board[2][0];
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
              if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === 2) {
                GameResult.classList.remove("hidden")
                GameResult.classList.add("flex")
                Oscore.innerText++
                return board[i][0];
              }
            }
            // Check columns
            for (let i = 0; i < 3; i++) {
              if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] === 2) {
                GameResult.classList.remove("hidden")
                GameResult.classList.add("flex")
                Oscore.innerText++
                return board[0][i];
              }
            }
            // Check diagonals
            if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === 2) {
              GameResult.classList.remove("hidden")
              GameResult.classList.add("flex")
              Oscore.innerText++
              return board[0][0];
            }
            if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] === 2) {
              GameResult.classList.remove("hidden")
              GameResult.classList.add("flex")
              Oscore.innerText++
              return board[2][0];
            }
          }, 300);
          // end check if o wins
          NextRound.addEventListener("click", function(){
            board = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
            ]
            for(i = 0; i < 3; i++){
              for(a = 0; a < 3; a++){
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


